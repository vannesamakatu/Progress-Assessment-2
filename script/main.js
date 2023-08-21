// --------------------------------------------------------------------------------------------------------
// Trips Array//
// -------------------------------------------------------------------------------------------------------

const arrTrips = [
{
  name: "British Island",
  price: R30000,
  days: 5,
  image: "n island.jpg",
  tripAmount: "low",
  
},
{
  name: "French Island",
  price: R30000,
  days: 10,
  image: "ns island.jpg",
  tripAmount: "low",
},
{
  name: "Cayman Island",
  price: R100000,
  days: 15,
  image: "ns island.jpg",
  tripAmount: "high",
  
}
];


// ----------------------------------------------------------------------------------------------------
// when sort or filter is clicked//
// ----------------------------------------------------------------------------------------------------
 $("input[name='filterRadio']").click(function() {
     appliedFilter = $(this).attr('value');
    
    console.log(appliedFilter)
    filterSortTrips();
 });

 $("input[name='sortRadio']").click(function(){
     appliedSort = $(this).attr('value');

     console.log(appliedSort)
     filterSortTrips();
 });

 function filterSortTrips(){
    let filteredSortedArrTrips = [];

    // filter trips
if(appliedFilter){
    filteredSortedArrTrips = arrTrips.filter(trip => trip.tripAmount == appliedFilter)

}else 
    filteredSortedArrTrips = arrTrips;

}

    //  sort trips

if (appliedSort == "low to high"){

    //   sort the trips from highest price to lowest price
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
    return a.price - b.price

    });
    
}else if (appliedSort == "days"){

    //sort trips according to name
    filteredSortedArrTrips = filteredSortedArrTrips.sort((a,b) => {
        return a.days - b.days
       
    });

}

    
    loadTrips(filteredSortedArrTrips);



// --------------------------------------------------------------
// $(document).ready(function(){

// $.ajax({
//     type:"GET",
//     URL:"https://api.openweathermap.org/data/2.5/weather?q={Johannesburg}&appid={9e62258cebd01311b54d759dbee2f9c6}",
//     success:function(data){
//         tempData = data
//         console.log(data);
// }

// )}.done(function)(
//     $(#"tempdata").html(tempData.main.temp)
// ))   


// })


 







