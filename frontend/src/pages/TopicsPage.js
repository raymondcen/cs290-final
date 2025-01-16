function TopicsPage() {
    return(
        <>
            <h2> Web Dev Concepts </h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#feDesign">Frontend Design</a>
                <a href="#optImgs">Optimizing Images</a>
                <a href="#favicon">Favicons</a>
                <a href="#forms">Forms</a>
                <a href="#jscript">JavaScript</a>
            </nav>
                <article id="webServers">
                    <h3> Web Servers </h3>
                    <p> 

                        A designated homepage is the root directory of the web application. This file
                        is returned whenever a "get" request is received for a resource. Its name relates to different servers and 
                        different languages because of how other servers have their own version of an index.html. For example, OSU's 
                        ENGR server has the default name of index.html, but Microsoft's server uses default.html and other servers look 
                        for index.js, index.php as the homepage, which is created in different languages.
                    </p>
                    
                    <p>

                        In the Inspector's Network tab, files can be seen in the output. The a1-cenra file can be seen with status 200, main.css 
                        and main.js has status 404 because they do not exist and the GET request failed. The files content.js, executor.js and 
                        favicon.ico, the icon for the webpage, can also be found with status 200. There are many differences between running it on 
                        my local machine and the web browser. For example, files such as content.js, executor.js and favicon.ico only exist in the 
                        web browser version and not on the local machine. The URL is also different as the local machine one has the file path as 
                        the URL and the web browser has a standard URL. The time it took to retrieve those files also takes longer on the web 
                        browser version than the local machine.
                    </p>
                
                    <p>

                        The favicon.ico has status 200 because the request and response was successful but main.css and 
                        main.js has status 404 because there is no file such as those or those files couldn't be found
                    </p>
                    
                    <p>

                        The scheme is https://. The subdomain is web.engr. The host domain is oregonstate.edu. 
                        The path to the page is /~cenra. The resource is /a1-cenra.
                    </p>
            </article>
        
            <article id="feDesign">
                <h3> Frontend Design </h3>
                    <p>

                        Frontend design is everything the user interacts with and sees on a web page. It's about creating the most appropriate experience
                        for its users. Frontend designs include creating a visual design for the web page, a graphical user interface, and overall
                        a good interactive experience. The visual design needs to have a consistent color scheme, font, photography, typography, icons, and navigation system.
                        The response time of the web page is also crucial for keeping the users attention. The input device for interaction also needs to be
                        consistent. Minimizing switches in input devices is also good to help users make the most out of their time.
                    </p>
                    <h4>The Five "E"s</h4>
                    <dl>


                        <dt>Effective</dt>
                            <dd>The web page helps users meet their goal(s). The web page is able to accomplish what the users are hoping to seek out of the web page</dd>
                        <dt>Efficient</dt>
                            <dd>The user can perform the task with the least amount of steps. They are able to accomplish their goal or complete a task without wasting time on unnecessary things.</dd>
                        <dt>Easy to navigate</dt>
                            <dd>The web page is easy to navigate. The user is able to easily locate what they are looking for.</dd>
                        <dt>Error-free</dt>
                            <dd>The web page avoids accessibility and availability issues. There are no glitches or any problems that would cause the user to not efficiently use the web page.</dd>
                        <dt>Enjoyable</dt>
                            <dd>The web page is engaging. It fits the needs for the intended audience in terms of design and content.
                            The user will be able to come back because of the previous four E's and the overall experience.</dd>
                    </dl>
        
                    <p>
    
                        The <code>header</code> tag is the banner or masthead for an app/web page and usually includes the name, publisher and/or marketing 
                        slogan. The header is usually the same from page to page, to ensure the user knows that they are still on the same site.
                        The <code>nav</code> tag is used to take the user from the current page to other pages. They are usually in sets such as a main menu, location,
                        search, tools, and legal links. The <code>main</code> tag is the primary block that holds content such as tutorials, galleries and stories. The
                        <code> section</code> tag is used to make a thematic group of content. The group of content are all related. The first child of a section would be 
                        h1 that describes what that section is. The <code>article</code> tag is used inside a <code>section</code> and is a single topic with a <code>h2</code> headline.
                        Multiple article tags are usually marked with ID selectors, such as <code>#topic</code>, so they can be styled accordingly. The <code>footer</code> tag is below <code>/main </code>
                        tag and usually holds legal information, contact information and links to important pages. At minimum, it should contain the owner of the website's copyright statement
                        with the copyright symbol.
                    </p>                    
                <h4>Anchors</h4>
                <p>
                    <ol>

                        <li>Anchors can be used to link external content from other websites to the current website using hyperlinks, the href attribute. The href
                            attribute makes it possible to embed links onto the webpage which can take users to another website.
                        </li>
                        <li>Anchors can be used to link a text item to another text item in the same page using IDs. When a tag has an ID attribute then it can be used
                            with a '#' to define the reference for an anchor. So instead of embedding a link into the href attribute, something like <code>#topic</code> can be used instead
                            to take the user to another item on the same webpage.
                        </li>
                        <li>Anchors can be used for navigation or for moving page-to-page. Decorative, button-like anchors can be used to link to other pages on the website
                            or link to external websites.
                        </li>
                    </ol>
                    </p>
            </article>
            <article id="optImgs">
                    <h3>Optimizing Images</h3>
                        <p>
                            A descriptive file name is used to improve search engine optimization, file names should also include who, what, when and where, as much as possible. You should use descriptive but concise names. It will greatly help the search engine bots sift through images for users who are searching for specific or related images.
                            Small file sizes help reduce the load time. If a simple image of a code snippet has high resolution, resulting in higher file size, it will lead to higher load time. Images such as those should be kept to a minimum as high resolution is not needed and only the code needs to be legible. Compressions such as Lossy, which discards image data, can
                            help compress such files. Other files that are meant for higher resolution can use Lossless, which compresses the file size but does not degrade the visual quality.
                            Having exact dimensions can greatly help reduce image file size and fit the image onto the web page. Trying to fit a large image into a small space will only increase load time, so reducing the size and cropping the image is needed to reduce load time.
                            The correct file format is also very important, as it can also help reduce file sizes. Separating and optimizing which image should have which file type can optimize a photo's quality and size. For example .JPG can be used for online photos most of the time.
                            GIF can be used for small logos and icons and if graphics need transparency, PNG is an optimal option.
                            A  reduced resolution is important to consider because usual monitors render between 72 and 300+ pixels per inch. Because much higher resolutions are available, having multiples image sizes for each is becoming a norm.
                            A color mode is used to show colors consistently across all web pages and devices. The usual RGB can be used for PNG, JPG, SVG and WebP. Then 8-bit for GIF and sometimes PNG.

                        </p>
                        <p>
                            SVG is for animated images, two-dimensional or interactive images. GIF files are for animation, line-art graphics, or 8-bit transparency. They can also be used to save short videos sequences as animated GIF. PNG have true transparency are best for line art, biomorphic shapes, and solid colors. They can overlay any color without distortion, which allows transparent backgrounds.
                            JPF are reserved for photos because of their millions of variety of colors and high detail from high resolution cameras. WebP are usually only used for photographic images. They can compress down to small file sizes and still remain rectangular, and they also support transparent backgrounds.
                        </p>
            </article>
            <article id="favicon">
                    <h3>Favicons</h3>
                        <p>
                            Devices and browsers use favicons to quickly recognize a website in various contexts such as browser tabs on cellphones, large displays, and search engine lists, website, app or logo is displayed in the correct file type and/or size. The favicons are in GIF, PNG, ICO or SVG formats.
                            When a user visits a website, the browser will detect the favicon files and can display them in either tabs, bookmarks, device screens or search engine result lists.
                    </p>
            </article>
            <article id="forms">
                    <h3>Forms</h3>
                    <p>
                        The six major goals of accessible forms are to provide clear instructions, give users the reason data is being gathered,
                        set the first field to automatically receive focus, enable keyboard navigation and input for all forms, implement tab indexing to complex forms and make sure that
                        compatible with screen reader. This is all so that new users and users with disabilities such as poor vision, mental disabilities or hearing problems can
                        also fill out online forms. It's also so that fields that are required to be filled out can also be distinguished from ones that
                        aren't required and provide what order they should be filled out in. Autofocus is used so that users can immediately start filling out the form. Keyboard control for those
                        who don't have access to a mouse. Lastly, t's also needed for apps or websites that are funded by the government to comply with ADA Section 508.
                    </p>
                    <p> 
                        A major tag is <code>form</code>. It is crucial and to implement forms into HTML documents. It acts as a container
                        for form elements. Attributes such "action" provide where the form data will be sent upon being submitted.
                    "Method" is used to determine which HTTP method will be used when submitted, such as GET
                    or POST. <code>fieldset</code> and <code>legend</code> work together to tell the users what section
                    of the form retains to. It helps organize it's into groups for example contact information, allergies, or health problems. 
                    <code> label</code> is used to provide descriptive text to the user. The for attribute helps link the
                    label to an id attribute. Another attribute is required which makes sure that specific field is filled
                    which prevents bot attacks on the website which is <code>form</code>. The <code>input</code> tag with type attribute specifies
                    what the field should be. Such as dropdown, checkbox, or an area of text for the user to write in. The name attribute is used
                    when the user submits the form and the "name" is how the server can distinguish the items in the form. The value attribute sets
                    the text on the button and for associating itself with an option in one of the fields that have many options.
                    </p>
            </article>
            <article id="jscript">

                    <h3>JavaScript</h3>
                        <p>
                            The main data types in JavaScript are objects, special values such as null, symbols, strings, Boolean and numbers
                        </p>
                        <p>
                            A JavaScript object is a set of key value pairs. The keys are symbols or strings that connect to the value, which can be any data type.
                            The properties of the objects can be created, read, updated and deleted which helps with data management. Objects are used to encapsulate data, which can help
                            with reusing code.
                            An array is a collection of elements, where each element can be any data type. They are mainly used to store a series of  such as strings, objects or numbers.
                            JSON is a data exchange format that is easy for humans to read. It has its own independent language, which makes it widely used
                            for exchanging data between programming languages and systems. It's mainly used to transmit data between a web client and web server and storing configuration settings.
                        </p>
                        <p>
                            Conditionals are used to allow decision-making within a program given a certain condition. Many conditional statements include "if" statements, "else" statements, "else if" statements and
                            switch statements. All are used to create logic that can be reacted to from different inputs, which helps control the flow of the program.
                        </p>
                        <p>
                            Object-oriented programming (OOP) is a pattern of programming based on objects. The main things of OOP are encapsulation, inheritance, polymorphism and abstraction.
                            All are used to make code reusable, organize code, mimic real world objects and make large and complex systems easy to understand. 
                        </p>
                        <p>
                            Functional programming is a way to program that treats programming as mathematical functions. It creates programs that are more predictable.
                            Functions in functional programming are treated as "first-class" which means that it can return functions, receive functions and assign functions to other variables.
                        </p>
            </article>
    </>
    );
}
export default TopicsPage;  