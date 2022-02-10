// import { checkForName } from "./nameChecker"; // dont need this here only in unit testing exercise
import { urlChecker } from "./urlChecker";

//Global variable
const server = "http://localhost:8080/";
const agreementElement = document.getElementById("agreement");
const subjectivityElement = document.getElementById("subjectivity");
const ironyElement = document.getElementById("irony");

function handleSubmit(event) {
  // make sure we have content
  event.preventDefault();
  
  // check what text was put into the form field
  let formText = encodeURI(document.getElementById("name").value);
 
  // is this an url or text
  let isvalidURL = Client.urlChecker(formText);
  console.log(isvalidURL.toString());
  
  if (isvalidURL < 1) {
	 alert("Input is not a valid URL. Treating it as text.");
  } else {
	 alert("Treating input as URL.");	  
  }
    
  // now it's save to push the form data
  postData(`${server}api`, { url: formText }).then((res) => {
    // overwrite the initial innerhtml with the return values of the API
    agreementElement.innerHTML = "Agreement :"+ res.agreement;
    subjectivityElement.innerHTML = "Subjectivity :" + res.subjectivity;
    ironyElement.innerHTML = "Irony : "+ res.irony;
  });
}

async function postData(url = "", data = {}) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
    } catch (error) {
	  // if there are errors we'd like to see them
      console.log("error" + error);
      }
}

export { handleSubmit, postData };
