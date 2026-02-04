function getEstimatedRange(batteryPercent){
    let range = batteryPercent*4;
    if(batteryPercent <0){
        return 0;
    }
    if (batteryPercent >100){
        return 400;
    }
    return batteryPercent*4;
}

    console.log("estimated Range:" + getEstimatedRange(52)+ "km");
    console.log("estimated Range:" + getEstimatedRange(75)+ "km");
    
  

