const axios = require('axios')
// const router = require('express').Router()
// module.exports = router

const key = "AIzaSyD9RvBHIptwksmmGwzixojAm8FPV9-rVyg";


 function placesNearBy() {
//router.get('/restaurants', async (req, res, next) => {
 try {
   const neighborhood = 'chelsea'
   const borough = 'manhattan'
   const city = 'new+york+city'
   const category = 'burgers'
   //const {data} = await axios.get(

   console.log('*****Google Places API: ' + 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=$' + {category} + '+$' + {neighborhood} +  '+$' + {borough} + '+$' + {city} + '&type=restaurant&key=$' + {key});
   
   const {data} =  axios.get(
   
`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
   )
   res.json(data)
   } 
 catch (err) {
  next(err)
}
}

export {placesNearBy};




