import asyncio

import aiohttp

from timer import timer

nodeURL = 'http://localhost:8080/users'
pyURL = 'http://localhost:80/users'


async def fetch(session, url):
    async with session.get(url) as response:
        json_response = await response.json()


async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, pyURL) for _ in range(1000)]
        await asyncio.gather(*tasks)

async def main1():
    async with aiohttp.ClientSession(trust_env = True) as session:
        tasks = [fetch(session, nodeURL) for _ in range(1000)]
        await asyncio.gather(*tasks)

print('fast-api: ')
@timer(1, 5)
def func():
    asyncio.run(main())

print('express: ')
@timer(1, 5)
def func1():
    asyncio.run(main1())
    

