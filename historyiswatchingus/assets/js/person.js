function createPersonCard(person){
	var html = '';

	html =+ '<div class="card-body">';
	html =+ '<h4 class="card-title">'+person.firstlast+'</h4>';
    html =+ '<a href="#" class="badge badge-secondary">'+person.party+'</a>';
    html =+ '<a id="card-toggle" class="card-btn btn-action ml-auto mr-4 mdb-color lighten-3"><i class="fa fa-chevron-right pl-1"></i></a>';
    html =+ '</div><!--end card body--->';
    html =+ '<div class="rounded-bottom lighten-3 text-center">';
    if (person.facebook_id){
    html =+ '<a target="_blank" href="https://facebook.com/'+ person.facebook_id +'" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i></a>';
    }
    if (person.twitter_id) {
    html =+ '<a target="_blank" href="https://twitter.com/'+ person.twitter_id +'" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i></a>';
    }

    if (person.youtube_url){
    html =+ '<a target="_blank" href="'+youtube_url+'" class="btn btn-social btn-youtube"><i class="fa fa-youtube"></i></a>';
    }

    if (person.website){
    html =+ '<a class="btn btn-social btn-website"><i class="fa fa-chrome"></i></a>';
    }
    html =+ '</div>';
    html =+ '</div><!-- Card -->';
    html =+ ' </div><!-- Grid column -->';

    return html;
}