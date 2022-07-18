console.log("Page loaded!");

var submitButton = document.getElementById('bsr-submit-button');
submitButton.onmouseup = getFormInfo; // not getFormInfo()

function getFormInfo(){
    console.log("entered getFormInfo");
    // get text from title, author and story fields
    var title_text = document.getElementById('title-text').value;
    var author_text = document.getElementById('author-text').value;
    var story_text = document.getElementById('text-story').value;

    console.log('title: ' + title_text + ' author:' + author_text + ' story: ' + story_text);

    //get checkbox state
    var genres_string = "";
    if (document.getElementById('checkbox-comedy-value').checked){
        console.log('comedy checked detected');
        genres_string += "Comedy,";
    }

    if (document.getElementById('checkbox-horror-value').checked){
        console.log('horror checked detected');
        genres_string += "Horror,";
    }

    if (document.getElementById('checkbox-drama-value').checked){
        console.log('drama checked detected');
        genres_string += "Drama";
    }
    // make genres combined string
    console.log("genres_string: " + genres_string);

    // make story dictionary
    var story_dict = {}
    story_dict['title']  = title_text;
    story_dict['author'] = author_text;
    story_dict['story']  = story_text;
    story_dict['genres'] = genres_string;
    console.log(story_dict);
    // call other function
    displayStory(story_dict);

} // end of getFormInfo

function displayStory(story_dict){
    console.log('entered displayStory');
    console.log(story_dict);
    // get fields from story dict and update the story area
    story_top = document.getElementById('story-top-line');
    story_top.innerHTML = story_dict['title'] + " by " + story_dict['author'];

    var story_tags = document.getElementById('story-tags');
    story_tags.innerHTML += story_dict['genres'];

    var story_body = document.getElementById('story-body');
    story_body.innerHTML = story_dict['story'];

} // end of displayStory
