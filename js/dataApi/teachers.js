fetch("https://yujlpvpwopbgtpigmuji.supabase.co/rest/v1/docentes?select=*", {
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
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="https://i.imgur.com/zv1UVWU.jpg" title="UEMSR" />
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">${data[i].level_education} ${data[i].name} ${data[i].surname}</h5>
                            <small>${data[i].description}</small>
                        </div>
                    </div>
                </div>         
        `;    
    }
    document.getElementById('teachers').innerHTML = body;
}
