const howManyReindeers = require('./index.js')

describe('Challenge 20', () => {
  test("Test #01 - expect return type array", () => {
    expect(typeof howManyReindeers([], [])).toBe('object')
  })

  test(`Test #02 - expected howManyReindeers([
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ], [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ]) to be [
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "France",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "Italy",
          "reindeers": [
            {
              "type": "Electric",
              "num": 3
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        }
      ]`, () => {
    expect(howManyReindeers([
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ], [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ])).toEqual([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      },
      {
        "country": "France",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1
          },
          {
            "type": "Gasoline",
            "num": 1
          },
          {
            "type": "Diesel",
            "num": 2
          }
        ]
      },
      {
        "country": "Italy",
        "reindeers": [
          {
            "type": "Electric",
            "num": 3
          },
          {
            "type": "Gasoline",
            "num": 3
          },
          {
            "type": "Diesel",
            "num": 5
          }
        ]
      }
    ])
  })


  test(`Test #03 - expected howManyReindeers(
        [
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [{ country: 'Spain', weight: 37 }]
      )
        to be [
            {
              "country": "Spain",
              "reindeers": [
                {
                  "type": "Electric",
                  "num": 2
                },
                {
                  "type": "Gasoline",
                  "num": 2
                },
                {
                  "type": "Diesel",
                  "num": 7
                }
              ]
            }
          ]`, () => {

    expect(howManyReindeers(
      [
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [{ country: 'Spain', weight: 37 }]
    )).toEqual([
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 2
          },
          {
            "type": "Gasoline",
            "num": 2
          },
          {
            "type": "Diesel",
            "num": 7
          }
        ]
      }
    ])
  })

  test(`Test #04 - expected howManyReindeers(
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 }
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 }
        ])
        to be [
            {
              "country": "Spain",
              "reindeers": [
                {
                  "type": "Electric",
                  "num": 1
                },
                {
                  "type": "Gasoline",
                  "num": 3
                },
                {
                  "type": "Diesel",
                  "num": 5
                }
              ]
            },
            {
              "country": "Germany",
              "reindeers": [
                {
                  "type": "Gasoline",
                  "num": 1
                },
                {
                  "type": "Diesel",
                  "num": 2
                }
              ]
            },
            {
              "country": "France",
              "reindeers": [
                {
                  "type": "Electric",
                  "num": 1
                },
                {
                  "type": "Gasoline",
                  "num": 1
                },
                {
                  "type": "Diesel",
                  "num": 2
                }
              ]
            },
            {
              "country": "Italy",
              "reindeers": [
                {
                  "type": "Electric",
                  "num": 3
                },
                {
                  "type": "Gasoline",
                  "num": 3
                },
                {
                  "type": "Diesel",
                  "num": 5
                }
              ]
            }
          ]`, () => {

    expect(howManyReindeers(
      [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ])).toEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "Germany",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "France",
          "reindeers": [
            {
              "type": "Electric",
              "num": 1
            },
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        },
        {
          "country": "Italy",
          "reindeers": [
            {
              "type": "Electric",
              "num": 3
            },
            {
              "type": "Gasoline",
              "num": 3
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        }
      ])
  })

  test(`Test #05 - howManyReindeers(
        [
        { type: 'Gasoline', weightCapacity: 5 }
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 }
        ])
        to be [
            {
              "country": "Spain",
              "reindeers": [
                {
                  "type": "Gasoline",
                  "num": 5
                },
                {
                  "type": "Diesel",
                  "num": 5
                }
              ]
            },
            {
              "country": "Germany",
              "reindeers": [
                {
                  "type": "Gasoline",
                  "num": 1
                },
                {
                  "type": "Diesel",
                  "num": 2
                }
              ]
            }
          ]`, () => {

    expect(howManyReindeers(
      [
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 }
      ])).toEqual([
        {
          "country": "Spain",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 5
            },
            {
              "type": "Diesel",
              "num": 5
            }
          ]
        },
        {
          "country": "Germany",
          "reindeers": [
            {
              "type": "Gasoline",
              "num": 1
            },
            {
              "type": "Diesel",
              "num": 2
            }
          ]
        }
      ])
  })
})