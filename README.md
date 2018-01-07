## ArcaneJS UI
The result of an experiment that started 2 years ago out of frustration with the
frontend development frameworks I was using at the time (spoiler-alert: I didn't
know React). What if I created my own framework (with blackjack and hookers)?.

My goal was to use only javascript to interface with the DOM instead of using 
HTML as an intermediary format. This eliminates "glue" code needed to link DOM
elements to variables in javascript. The first experiment proved to be useful to
me and I started using it in various projects, adding functionality when needed.

When using the framework in real world applications it became apparent that the
code to create Elements and add them as children was too verbose. I started 
experimenting with using Json to describe markup. In the end I ended up taking a
lot of inspiration from QML used by the QT framework for c++ applications.

The framework is by no means finished. I'm writing this and the following 
how-to so that others can use the framework in the hope that someone might find
it usefull, or at least entertaining.

# Q&A:

How is this different from AngularJS?
Angular, like many other frameworks, has extended HTML with directives. Instead
of HTML Arcane uses a Json based markdown language that creates a structure in 
memory that easy to work with.

How is this different from React?
React extends javascript syntax with HTML (JSX). This is a very novel approach
and way beyond my capabilities. But why not remove HTML from the equasion 
completely?

Are you saying this is better?
No.

Can I use Bootstrap?
Yes.

What is it good for?
Single page applications that require a complex GUI.

What is it not good for?
Internet explorer and SEO.

# How-to

The base for Arcane is the Element class. It is a wrapper around the DOM element
that  extends the functionality. In retrospect a name that is different like 
React's component would have been less confusing. All objects that need a visual
representation extend the Element class and have many Elements as members to
create reusable components. After element.js has been loaded elements can be 
constructed like this.

    let greeting = new Element();
    
We can now interact with this object using functions from the Element class such
as the setText function.

    greeting.setText("Hello world!");
    
To add this element to the document we can use the show function.

    greeting.show();
    
Where possible the functions return the object itself so functions can be chained
for a more concise notation.

    let greeting = new Element().setText("Hello world!").show();
    
Whenever functionality from the DOM element isn't exposed and you want to
reference it you can use the element member like this.

    greeting.element;
    
When leaving the constructor empty the default type of the DOM element created 
is a div. To create other types pass a string as the first argument of the 
constructor.

    let greeting = new Element("H3");
    
The rest of the framework contains classes that wrap commonly used DOM elements
like for example textfield and button. To use these the corresponding js files 
need to be loaded. 

    let greeting = new H3();

Lets extend the Element class to create a more complex reusable component like a
form that asks for a name and uses it.

    class Greeter extends Element{
        constructor(){
            super();
            this.question = new H3().setText("What is your name?"));
            this.answer = new Input("Input");
            this.button = new Button().setText("Submit");
            
            this.addChild(this.question);
            this.addChild(this.answer);
            this.addChild(this.button);
            
            button.onClick = () => {
                this.hide();
                let name = this.answer.element.value;
                let message = new Element().setText("Hello " + name + "!").show();
            }
        }
    }
    
We now only have to call the constructor of our Greeter class because the object
adds itself to the document by calling this.show() in the constructor.

    let greeter = new Greeter();

This is how the original framework works. It is important to know how this works
because the Json markup builds upon these principles and this way you know
exactly what they will be doing. Lets recreate the above example using Json
markup. For some reason I stuck with blueprints as the name to reference to
these Json markups.

    class Greeter extends Element{
        constructor(){
            super({
                question:{
                    type:H3,
                    text:"What is your name?"
                },
                answer:{
                    type:Input
                },
                button:{
                    type:Button,
                    text:"Submit"
                }
            });

            this.button.onClick = () => {
                this.hide();
                let name = this.answer.element.value;
                let message = new Element({text:"Hello " + name + "!"}).show();
            }
        }
    }

Note that the this.show() has been removed from the constructor so that our
Greeter can be a child of a specific element.
    
    let greeter = new Greeter().show();

This enables this class to be used in subsequent blueprints by setting the type
of the element to be created to your class.

    class GreetApp extends Element{
        constructor(){
            super({
                greeter:{
                    type:Greeter
                }
            });
        }
    }
    
    
    