Curtains
========

A javascript plugin for creating pages that are revealed when the previous page lifts up like curtains rising.  


README Contents
---------------

- [About](#a1)
- [Demo](#a2)
- [How to Use](#a3)
- [Planned Updates](#a4)
- [License](#a5)
- [Author](#a6)


<a name="a1"/>
About
-----

Curtains is a javascript plugin to add a neat [curtains effect](#a2) to your webpage.  

A site using Curtains has a series of pages, each acting like a curtain that rises revealing the pages behind. Scrolling down moves the current page up the screen. The next page is fixed behind, revealed as the bottom of the current page becomes visible and moves up the screen. When the current page is no longer visible, the next page will start to move up the screen.  


<a name="a2"/>
Demo
----

View a demo of this plugin: [Curtains](http://curtains.herokuapp.com/).  

*This demo is a [Roots](roots.cs) project. View the Roots project code in the [demo folder](https://github.com/ericavonb/curtains/tree/master/demo).*

<a name="a3"/>
How to Use
----------

To have the Curtains effect on your webpage:

- Enclose each part that you want to be an individual page in a div with class "page".  

- Enclose all of these pages that will have the effect in a div with class "pages".  

- Include the javascript file [curtains_0_1.js](https://github.com/ericavonb/curtains/blob/master/curtain/curtains_0_1.js) in the body or in the head when the document loads.  

<a name="a4"/>
Planned Updates
---------------
Some planned updates to the plugin:

- Add a function such that adding the class "full" to a page makes it take up the height of the screen.

- Allow elements within the pages to have a parallax effect, i.e. scroll at a different speed from the rest of the page.  

Contact me if you have any additional suggestions.

<a name="a5"/>
Licence
-------

Copyright (c) 2013, Erica von Buelow

All rights reserved.  

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:  

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

<a name="a6"/>
Author
------

Erica von Buelow

Contact at: [evonbuelow@gmail.com](mailto:evonbuelow@gmail.com)  

*If you have any questions, comments, or suggestions, send me an email.*