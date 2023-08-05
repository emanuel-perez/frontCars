export interface carSub {
    Year:number,
    Make:string,
    Model:string,
    "Used/New":string,
    Price:string,
    ConsumerRating:number,
    ConsumerReviews:number,
    SellerType:string,
    SellerName:string,
    SellerRating:number,
    SellerReviews:number,
    StreetName:string,
    State:string,
    Zipcode:number,
    DealType:string,
    ComfortRating:number,
    InteriorDesignRating:number,
    PerformanceRating:number,
    ValueForMoneyRating:number,
    ExteriorStylingRating:number,
    RealibilityRating:number,
    ExteriorColor:string,
    InteriorColor:string,
    Drivetrain:string,
    MinMPG:number,
    MaxMPG:number,
    FuelType:string,
    Transmission:string,
    Engine:string,
    VIN:string,
    "Stock#": string,
    Mileage:number
}

export function colorCheck(inp:string){
    var tmp = inp.toLowerCase();
    if(tmp.includes("gray") || tmp.includes("magnetic") || tmp.includes("granite") || tmp.includes("mineral") || tmp.includes("pewter") || tmp.includes("gunmetal") || tmp.includes("grey") || tmp.includes("lunar") )
      return "gray";
    else if(tmp.includes("black") || tmp.includes("ebony") || tmp.includes("charcoal"))
      return "black";
    else if(tmp.includes("blue") || tmp.includes("bikini") || tmp.includes("mica") || tmp.includes("aqua"))
      return "blue";
    else if(tmp.includes("brown") || tmp.includes("caviar") || tmp.includes("coffee"))
      return "brown";
    else if(tmp.includes("sky") || tmp.includes("sapphire"))
      return "lightskyblue";
    else if(tmp.includes("red") || tmp.includes("red"))
      return "red";
    else if(tmp.includes("anvil") || tmp.includes("cement") || tmp.includes("moon dust") || tmp.includes("celestite"))
      return "lightsteelblue";
    else if(tmp.includes("burgundy") || tmp.includes("maroon"))
      return "maroon";
    else if(tmp.includes("silver") || tmp.includes("platinum") || tmp.includes("lead") || tmp.includes("polished metal"))
      return "silver";
    else if(tmp.includes("quartz"))
      return "darkgray"
    else if(tmp.includes("white") || tmp.includes("pearl") || tmp.includes("zero"))
      return "white";
    else if(tmp.includes("orange"))
      return "orange";
    else if(tmp.includes("steel"))
      return "darkgray";
    else if(tmp.includes("scarlet"))
      return "darkred"
    else if(tmp.includes("lava"))
      return "orangered"
    else if(tmp.includes("tan"))
      return "tan"
    else if("green")
      return "green"
    else if(tmp.includes("forest"))
      return "darkseagreen"
    else if(tmp.includes("olive"))
      return "darkolivegreen"
    else if(tmp.includes("sandstone") || tmp.includes("sandstorm"))
      return "beige"
    else if(tmp.includes("amethyst"))
      return "indigo"
    else if(tmp.includes("midnight"))
      return "midnightblue"
    else {
      console.log(inp.toLowerCase());
      return "aliceblue";
    }
}