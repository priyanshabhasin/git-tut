document.getElementById("myText").value=fun()
    function fun(){
        var url=document.URL;
        var urlParams = new URL(url).searchParams;
        
        var firstName = urlParams.get("id");
        var lastName = urlParams.get("cid")
        return (firstName+" "+lastName);

    }
    