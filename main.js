window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      //const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      //const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      //const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      //const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      // const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  



    // convert date to it format
    dayName = today.toLocaleDateString("it-it", { weekday: "long" });
    monthName = today.toLocaleString("it-it", { month: "long" });
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1)

      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = /*monthList[month] + " " +*/ day /*+ ", " + year*/;
      const time = /*hourTime*/ hour + ":" + minute;
  
      //combine current date and time
      const dateTime = dayName + " " + date + " " + monthName + " " + year + "<br />" + time ;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });
  
