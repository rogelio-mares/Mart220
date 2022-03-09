//array
var myViewFinderArray = new Array();

// class
class ViewFinder
{   // title
    constructor(title, Image, Description, Author, ImageYear )
    {
        this.title = title;
        this.Image = Image;
        this.Description = Description;
        this.Author = Author;
        this.ImageYear = ImageYear;
    }

    toString()
    {
        return "Title: " + this.title;    
    }

    get theTitle()
    {
        return this.title;
    }

}

// array myViewFinderArray
function initializeArray()
{
    var myViewFinder = new ViewFinder("Untitled refugee life jacket installation, Mehmet Kamen, 2016, hoping to highlight the severity of the ongoing refugee crisis");
    var myViewFinder1 = new ViewFinder("Ethnicities, Mario Tama, 2016, this mural depicts five Indigenous people from five continents ");
    var myViewFinder2 = new ViewFinder("AIDS Memorial Quilt, Jeffrey Markowitz,1987, The ongoing project memorializes those who have died from HIV and AIDS through quilted panels ");
    var myViewFinder3 = new ViewFinder("Field of Vision: A Garden for Others, Jenny Kendler, 2015,In creating Field of Vision: A Garden for Others,");
    var myViewFinder4 = new ViewFinder("Invisible Homeless, Mark Simmons, 2015,a glass sculpture of a sleeping body resting on a bed of cardboard, to represent how homeless people struggle to be seen on city streets.");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

// accessInformation
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}