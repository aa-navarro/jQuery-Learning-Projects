/*
 * INSTRUCTIONS:
 * 
 * There are two files included here:
 * -- index.html (snippet of an actual site we built that is currently in beta; links to CDN jQuery)
 * -- application.js (the file you're looking at now; this has been wiped)
 * 
 * At the client's request, we took these FAQs and made the area on the left a collapsible
 * semi-accordion. Each of the major sections could be opened and closed, and the questions inside
 * could also be opened and closed. The links on the right allowed for quick jumps to specific FAQs.
 *
 * I've pulled out all the JS we used to accomplish this and the thought is to have you recreate
 * the functionality. This is a definite real-world example but is on the easier end of the JS
 * we do on a daily basis. This was taken from a WordPress build and so all the HTML that is present
 * was auto-generated.
 *
 * Without changing the HTML file, please accomplish the following things:
 */
 
 
 
 // 1) set up the FAQs on the left such that:
 		
 //    A) the major sections can be opened and closed but only one should be open at a time.
		 	$(function(){			 						
										
					$("div.answer.accordion-hide").hide();
					$("div.faqs-for-tag.accordion-hide").hide();

					$('div.all-faqs').on('hover', function(){
										
					$('div.faqs-for-tag.accordion-hide').show();
					$('div.answer.accordion-hide').show();
					$('span.expand').on('click', function(){
						
						$('div.answer.accordion-hide').hide();
						$(this).html("[&#x2013]");
					
					

					//$('span.expand').
			});
        });


		 
//    B) the individual questions can be opened and closed but only one can open at a time.
  
//    C) if a question was open when a major section is closed it should close
 
//    D) when a section/question opens the [+] should switch to [–] (en-dash: &#x2013;)

//    E) when a section/question closes the [–] should switch to [+]
 
// 2) set up the links on the right such that:
 
//    A) they no longer link to anywhere, but instead . . .
 
//    B) trigger the appropriate section/question to open by setting a section hash tag on the URL

//    C) and all of this without refreshing the page

// 3) set up the "Jump to a Category" drop down such that choosing an item triggers the appropriate section to open by setting a section hash tag on on the URL

// 4) lastly, the page itself should be able to default to a specific section (not question) being open if the appropriate hash tag is set when the page is loaded

