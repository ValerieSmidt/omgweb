import discord
import json
from discord.ext import commands, tasks
from zoneinfo import ZoneInfo
from dotenv import load_dotenv
import os

load_dotenv()

TOKEN = os.getenv("DISCORD_TOKEN")
GUILD_ID = int(os.getenv("GUILD_ID"))


intents = discord.Intents.default()
intents.guild_scheduled_events = True
intents.guilds = True

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")
    fetch_and_save_events.start()

@tasks.loop(minutes=5)
async def fetch_and_save_events():
    guild = bot.get_guild(GUILD_ID)
    if guild is None:
        print("Guild not found.")
        return

    events = await guild.fetch_scheduled_events()
    result = []

    for event in events:
        if event.status == discord.EventStatus.scheduled:
            start = event.start_time.replace(tzinfo=ZoneInfo("UTC")).astimezone(ZoneInfo("Europe/Oslo"))
            result.append({
                "id": str(event.id),
                "title": event.name,
                "description": event.description,
                "location": event.location,
                "date": start.strftime("%Y-%m-%d %H:%M"),
                "url": f"https://discord.com/events/{guild.id}/{event.id}"
            })

    with open("public/events.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f"Saved {len(result)} events to public/events.json")

bot.run(TOKEN)
