axios.get("https://project-1-api.herokuapp.com/showdates/?api_key=5d3f6448-e9d0-43f9-b9ba-53ff05ab10c0")
    .then(response =>{

        var elim = document.querySelectorAll(".section-two__show-container, .section-two__divider");
        
        elim.forEach(element => {
            element.remove()
        })

        var apiArray = response.data
        var arrayLength = apiArray.length;

        for (var i = 0; i < arrayLength; i++) {
        showDates(apiArray[i])
        }

        function showDates(shows){

            const contentContainer = document.getElementById("contContainer");

            var showContainer = document.createElement("div");
            showContainer.classList.add("section-two__show-container");

            contentContainer.appendChild(showContainer);

            var show = document.createElement("div");
            show.classList.add("section-two__show");

            showContainer.appendChild(show);

        //SHOW DATE-------------------------      
            var showDate = document.createElement("div");
            showDate.classList.add("section-two__show--date");

            show.appendChild(showDate);

            var showDateTitle = document.createElement("h4");
            showDateTitle.classList.add("section-two__show--date-title");

            showDate.appendChild(showDateTitle);
            showDateTitle.innerHTML = "DATE";

            var showDateValue = document.createElement("h3");
            showDateValue.classList.add("section-two__show--date-name");

            showDate.appendChild(showDateValue);
            showDateValue.innerHTML = apiArray[i].date;

        //SHOW VENUE-------------------------                    
            var showVenue = document.createElement("div");
            showVenue.classList.add("section-two__show--venue");

            show.appendChild(showVenue);

            var showVenueTitle = document.createElement("h4");
            showVenueTitle.classList.add("section-two__show--venue-title");

            showVenue.appendChild(showVenueTitle);
            showVenueTitle.innerHTML = "VENUE";

            var showVenueValue = document.createElement("h4");
            showVenueValue.classList.add("section-two__show--venue-name");

            showVenue.appendChild(showVenueValue);
            showVenueValue.innerHTML = apiArray[i].place;

        //SHOW LOCATION-------------------------
            var showLocation = document.createElement("div");
            showLocation.classList.add("section-two__show--location");

            show.appendChild(showLocation);

            var showLocationTitle = document.createElement("h4");
            showLocationTitle.classList.add("section-two__show--location-title");

            showLocation.appendChild(showLocationTitle);
            showLocationTitle.innerHTML = "LOCATION";

            var showLocationValue = document.createElement("h4");
            showLocationValue.classList.add("section-two__show--location-name");

            showLocation.appendChild(showLocationValue);
            showLocationValue.innerHTML = apiArray[i].location;

        //SHOW BUTTON & DIVIDER-----------------
            var showButton = document.createElement("button");
            showButton.classList.add("section-two__buy-tickets")

            showContainer.appendChild(showButton);

            var showButtonText = document.createElement("h3");
            showButtonText.classList.add("section-two__buy-tickets--text");

            showButton.appendChild(showButtonText);
            showButtonText.innerHTML = "BUY TICKETS";

            var showDivider = document.createElement("div");
            showDivider.classList.add("section-two__divider");

            contentContainer.appendChild(showDivider);
        }
    })
    .catch(error => {
        console.log(error);
    });
