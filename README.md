#ElementJS
ElementJS is a framework that allows for complex webapplications to be built in a pure ES6 object oriented fashion. Without the use of HTML (!!). At the core of this framework is the Element base class (hence the name) that provides a sane way to interface with traditional DOM elements. This Element class is extended to provide a JS6 class of other generic DOM elements like Divs, Buttons and Links. 

##What about HTML?
HTML was first released in 1993 and it's intended use was to define STATIC web content. It was in no shape or form conceived with the development of fully featured webapplications in mind. Trying to use HTML to develop complex webapplications is like using a hammer to screw in a lightbulb. However, many frameworks try to facilitate building webapplications on top of HTML by using templates and directives. Entire languages have been developed for this purpose. In stark contrast to this we state that HTML will never be more than a poor XML implementation. And like XML, has no place in modern webdevelopment.

If you like XML or using the wrong tool for the job, this library is not for you.

##Bootstrap
At the time of writing Bootstrap is the most widely used UI framework. JSReloaded offers JS6 classes for some of Bootstrap's components and they seem to play well with eachother. It would be nice to have full support for all of bootstraps elements and extensions like datepickers eventually.

##Examples##
Consider the following HTML that creates a Bootstrap navbar:

    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">HTML :'(</a>
        </div>
      </div>
    </div>

This is now done with a single line of JavaScript:

	let navBar = new NavBar("JS :D");
	
To select elements from the DOM traditionally selectors based on id are used:
  
  	var element = document.getElementById("someID");
	var element = $("#" + someID);

There is no example to give for this, because a reference to the objects should be saved upon instantiation. This allows development of webapplications more akin to the development of desktop applications.
