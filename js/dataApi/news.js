fetch("https://yujlpvpwopbgtpigmuji.supabase.co/rest/v1/news?select=*", {
    method: "GET",
    headers: {
    Content: "application/json",
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1amxwdnB3b3BiZ3RwaWdtdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NjQ4MjIsImV4cCI6MTk5NTM0MDgyMn0.pnPUvzoSKQVu8IDUGBAA-LxP_8Ke3MQFXmt4pusrf7c',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1amxwdnB3b3BiZ3RwaWdtdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NjQ4MjIsImV4cCI6MTk5NTM0MDgyMn0.pnPUvzoSKQVu8IDUGBAA-LxP_8Ke3MQFXmt4pusrf7c',
    
    }
})
    .then(response => response.json()) 
    .then(data =>  viewData(data))
    .catch(err => console.log(err))

const viewData = (data) => {
    let body = '';
    for (let i = 0; i < data.length; i++) {
        body += `
            <div class="newInfo">
                            <h5 class="titleCard">${data[i].title}</h5>
                            <iframe
                                src="${data[i].link}"
                                width="100%" height="700" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div> 
        `
    }
    document.getElementById('news').innerHTML = body;
}