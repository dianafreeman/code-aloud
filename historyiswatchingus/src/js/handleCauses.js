export const CauseObject = [
    {
        causeName: 'Heathcare Reform',
        permalinkName: 'healthcare-reform',
        isSelected: false,
        sectors: [
            {
                title: 'Health Services/HMOs',
                code: 'H03'
            },
            {
                title: 'Pharmaceuticals/Health Products',
                code: 'H04'
            },
            {
                title: 'Misc Health',
                code: 'H05'
            }
    ]
    },
    {
        causeName: 'Economic Reform',
        permalinkName: 'economic-reform',
        isSelected: false,
        sectors: [
            {
                title: 'Commercial Banks',
                code: 'F03'
            },
            {
                title: 'Securities and Investments',
                code: 'F07'
            },
            {
                title: 'Insurance',
                code: 'F09'
            },
             {
                title: 'Unions',
                code: ['P01', 'P02', 'P03', 'P04', 'P05']
            }
        ]
    },
    {
        causeName: 'Environmental Protection',
        permalinkName: 'env-protection',
        isSelected: false,
        sectors: [
                {
                    title: 'Oil and Gas',
                    code: 'E01'
                },
                {
                    title: 'Mining',
                    code: 'E04'
                },
                {
                    title: 'Electric Energy',
                    code: 'E08'
                }
           ]
     },
    {
        causeName: 'Gun Reform',
        permalinkName: 'gun-reform',
        isSelected: false,
        sectors: [
            {
                title: 'Gun Control',
                code: 'Q12'
            },
            {
                title: 'Gun Rights',
                code: 'Q13'
            }
        ]
    }, 
    {
        causeName: 'Reproductive Health',
        permalinkName: 'reproductive-health',
        isSelected: false,
        sectors: [
            {
                title: 'Anti-Choice',
                code: 'Q14'
            },
            {
                title: 'Pro-Choice',
                code: 'Q15'
            }
        ]
    },
    {
        causeName: 'Human Rights',
        permalinkName: 'human-rights',
        isSelected: false,
        sectors: [
            {
                title: 'Human Rights',
                code: 'Q09'
            }
        ]
    }
];
console.log(CauseObject)

/*
---- BELOW THIS LINE IS UNUSED --
*/

const  getIndustrySheet = () => {
var url = 'https://sheets.googleapis.com/v4/spreadsheets/16MF5dxGiPa92WXLskT1OBK61eTa8CPSWOaEUBFTiZgc/values/crpIndustryCodes?key='+GoogleKey;

fetch( url , {
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(text => {
      //  console.log(JSON.stringify(text));
     // creates a .json file for the response
       
    })
    .catch(err => console.error(err))

}
