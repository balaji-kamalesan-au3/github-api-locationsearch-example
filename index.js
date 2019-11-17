
$('.find-location').click(() =>{
    let location = $(".location-input-box").val();

    console.log(location);
    let url = 'https://api.github.com/search/users?q=location:'+location;


        $.getJSON(url, function(data){
                
            data = data.items;
             
                $(".user-data").empty();
                $(".header").empty();
                console.log(data.length);
                let i=0

                var header = document.createElement('h2');

                if(data.length){

                    header.textContent = "Top results of git hub profiles in " + location + " is";

                }
                else {
                    
                    header.textContent = "No GitHub profiles found in " + location + "!!";

                }
                
                console.log(header);
                $('.header').append(header);


                data.forEach(element => {

                    
                    let div = document.createElement('div');
                    let img = document.createElement('img');
                    let name =  document.createElement('h4');
                    let id = "usr"+ i;
                    let gitProfile = document.createElement('a');
                    div.setAttribute('class','card');
                    div.setAttribute('id',id);
                    img.setAttribute('src',element.avatar_url);
                    img.setAttribute('class', 'user-img')
                    gitProfile.setAttribute('href',element.html_url);
                    gitProfile.textContent = "Visit "+element.login+"'s Profile"

                    console.log(gitProfile);
                    
                    name.textContent = element.login
                   
                    $('.user-data').append(div);
                    $('#'+id).append(name);
                    $('#'+id).append(img);
                    $('#'+id).append(gitProfile);
                   i++;


                });

            
            
        })

});




let display= (data) => {

            

        
    
} 