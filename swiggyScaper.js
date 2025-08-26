import fetch from "node-fetch"
import fs from "fs"

async function fetchRestaurants(lat, lng, limit = 20) {
  let allRestaurants = []
  let offset = 0
  let hasMore = true

  while (hasMore && allRestaurants.length < limit) {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&offset=${offset}`

    const res = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        accept: "application/json",
      },
    })

    const json = await res.json()

    // NEW extraction path
    const restaurants =
      json?.data?.cards
        ?.map(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        )
        .flat()
        .filter(Boolean) || []

    if (restaurants.length === 0) {
      hasMore = false
    } else {
      allRestaurants.push(...restaurants)
      offset += 20
      console.log(`Fetched ${allRestaurants.length} restaurants so far...`)
    }
  }

  return allRestaurants.slice(0, limit)
}

;(async () => {
  const lat = 16.8530093
  const lng = 74.56234789999999

  const restaurants = await fetchRestaurants(lat, lng, 20)

  fs.writeFileSync("restaurants.json", JSON.stringify(restaurants, null, 2))

  console.log("Restaurants saved to restaurants.json")
})()
