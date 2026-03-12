// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.

   
   

 fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        
    





    });




$("#next-btn").click(function() {

    // something to populate the click event handler



});



// $.ajax({
//     url: "https://randomuser.me/api/",
//     method: "GET",
//     dataType: "json",
//     success: function (dataJSObject){ 
//         $.each(dataJSObject, (index, randomuser)=>{
//             $("#results").append(`<li><strong>${first.name}</strong> ${Last.name}</li>`)
//         });
//     },
//     error: function(xhr, status, error){
//         console.error("Error: ", error);
//     }
// });






















