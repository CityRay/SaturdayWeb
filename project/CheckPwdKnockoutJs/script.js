$(document).ready(function(){

	var randerpwd = function(){
		var pwd = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 8; i++ )
	    {
	    	pwd += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
		
		return pwd;
	};


	var checkpwd = function(pwd){
		this.pwd = ko.observable("");
		this.count = 0;
		this.newpwd = ko.observable(randerpwd());
		
		this.typepwd = ko.computed(function(){
			if(this.pwd() != null)
			{
				if(this.pwd().length > 7)
				{
					if(this.pwd().match(/[A-Za-z]/))
					{
						if(this.pwd().match(/[0-9]/))
						{
							return "「" + this.pwd() + "」";	
						}else{
							return "請至少輸入1個數字!!!";
						}

					}else{
						return "請至少輸入1個英文字!!!";
					}

				}else{
					return "請輸入8位數以上之密碼!!!";
				}				
			}	

			//return "「" + this.pwd() + "」";		
		}, this);

		this.checkpass = ko.computed(function(){

			if(this.pwd() != null && this.pwd() != "")
			{
				if( this.pwd() != this.newpwd() )
				{					
					if(this.count < 4)			
					{
						this.count++;
						console.log(this.count);
						return "密碼錯誤" + this.count +"次了!!!";
					}else
					{
						this.count=0;
						console.log(this.count);
						this.newpwd(randerpwd());
						return "密碼錯誤已5次了哦!!!密碼重新編碼!!!";
					}		
					
				}else{
					return "恭喜你猜對了!!!";
				}
			}
			
		}, this);


	};

	ko.applyBindings(new checkpwd());
});