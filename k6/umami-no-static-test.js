// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 400, duration: '30m' }

export default function main() {
  let response

  group('page_1 - <hostname>', function () {
    response = http.get('<hostname>', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(3.7)
  })

  group(
    'page_2 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.9)
    }
  )

  group(
    'page_3 - <hostname>en/recipes',
    function () {
      response = http.get(
        '<hostname>en/recipes',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2.9)
    }
  )

  group(
    'page_4 - <hostname>en/recipes/vegan-chocolate-and-nut-brownies',
    function () {
      response = http.get(
        '<hostname>en/recipes/vegan-chocolate-and-nut-brownies',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(6)
    }
  )

  group(
    'page_5 - <hostname>en/recipe-category/snacks',
    function () {
      response = http.get(
        '<hostname>en/recipe-category/snacks',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2.7)
    }
  )

  group('page_6 - <hostname>en', function () {
    response = http.get('<hostname>en', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(2.4)
  })

  group(
    'page_7 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2.1)
    }
  )

  group(
    'page_8 - <hostname>en/articles/dairy-free-and-delicious-milk-chocolate',
    function () {
      response = http.get(
        '<hostname>en/articles/dairy-free-and-delicious-milk-chocolate',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.9)
    }
  )

  group(
    'page_9 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.4)
    }
  )

  group(
    'page_10 - <hostname>en/articles/give-it-a-go-and-grow-your-own-herbs',
    function () {
      response = http.get(
        '<hostname>en/articles/give-it-a-go-and-grow-your-own-herbs',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(0.9)
    }
  )

  group(
    'page_11 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.2)
    }
  )

  group(
    'page_12 - <hostname>en/articles/the-real-deal-for-supermarket-savvy-shopping',
    function () {
      response = http.get(
        '<hostname>en/articles/the-real-deal-for-supermarket-savvy-shopping',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(0.8)
    }
  )

  group(
    'page_13 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2)
    }
  )

  group(
    'page_14 - <hostname>en/articles/the-umami-guide-to-our-favourite-mushrooms',
    function () {
      response = http.get(
        '<hostname>en/articles/the-umami-guide-to-our-favourite-mushrooms',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(0.9)
    }
  )

  group(
    'page_15 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.5)
    }
  )

  group(
    'page_16 - <hostname>en/articles/lets-hear-it-for-carrots',
    function () {
      response = http.get(
        '<hostname>en/articles/lets-hear-it-for-carrots',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(0.8)
    }
  )

  group(
    'page_17 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.4)
    }
  )

  group(
    'page_18 - <hostname>en/articles/baking-mishaps-our-troubleshooting-tips',
    function () {
      response = http.get(
        '<hostname>en/articles/baking-mishaps-our-troubleshooting-tips',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(0.8)
    }
  )

  group(
    'page_19 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2)
    }
  )

  group(
    'page_20 - <hostname>en/articles/skip-the-spirits-with-delicious-mocktails',
    function () {
      response = http.get(
        '<hostname>en/articles/skip-the-spirits-with-delicious-mocktails',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1.1)
    }
  )

  group(
    'page_21 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2)
    }
  )

  group(
    'page_22 - <hostname>en/articles/give-your-oatmeal-the-ultimate-makeover',
    function () {
      response = http.get(
        '<hostname>en/articles/give-your-oatmeal-the-ultimate-makeover',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1)
    }
  )

  group(
    'page_23 - <hostname>en/articles',
    function () {
      response = http.get(
        '<hostname>en/articles',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(6.7)
    }
  )

  group(
    'page_24 - <hostname>en/contact',
    function () {
      response = http.get(
        '<hostname>en/contact',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(14)
    }
  )

  group(
    'page_25 - <hostname>en/about-umami',
    function () {
      response = http.get(
        '<hostname>en/about-umami',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
    }
  )
}