// getting input to dom
let input = document.getElementById("inputBox").value
let output = document.getElementById("output-section")

// onclick event function logic
async function overviewFun(){
    try {
        let response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input}&apikey=8I65S9XII47NTX43`)
    const data = await response.json();

    // console.log(data)

    // getting output to dom
    output.innerHTML=`
    <strong> ${data.Symbol}</strong>
    <p><b>Asset Type: </b> ${data.AssetType}</p>
    <p><b>Company Name: </b>${data.Name}</p>
    <p><b>Company Details: </b>${data.Description} </p>
    <p><b>Sector: </b>${data.Sector}</p>
    <p><b>Industry:</b> ${data.Industry}</p>
    <p><b>PE Ratio: </b>${data.PERatio}</p>
    <p><b>Book Value: </b>${data.BookValue}</p>
    `
    } catch (error) {
        alert("Please enter valid stock")
    }
    
}