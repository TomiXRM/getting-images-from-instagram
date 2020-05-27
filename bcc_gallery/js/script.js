function func() {
        let account_name = document.getElementById("id_textBox1").value;
        try {
                // this.name = "impact.rits"; //アカウント名
                this.name = account_name;
                $.ajax('https://www.instagram.com/' + this.name + '/', {
                        timeout: 20000,
                        datatype: 'html'
                }).then(function (data) {
                        json_string = data.split("window._sharedData = ")[1];
                        json_string = json_string.split("};</script>")[0] + "}";
                        this.Arrya_data = JSON.parse(json_string);
                        let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
                        for (i in datas) {
                                url = datas[i].node.display_url;

                                var innerImages = '<div style="width: 200px"><img style="width: 100%;"src=' + url + '></div><p style="font-size:10px">' + url + '</p>';
                                console.log(url);//画像のURL出力
                                document.querySelector("#gallery").insertAdjacentHTML('afterbegin', innerImages);
                        }
                });
        } catch (error) {
                alert(error);
        }
}

func();