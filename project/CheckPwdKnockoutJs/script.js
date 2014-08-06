$(document).ready(function(){

	var checkpwd = function(pwd){
		this.pwd = ko.observable("");
		this.count = 0;
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
				if( this.pwd() != "a1234567")
				{					
					if(this.count != 5)			
					{
						this.count++;
						console.log(this.count);
						return "密碼錯誤" + this.count +"次了!!!";
					}else
					{
						console.log(this.count);
						return "密碼錯誤5次了哦哦!!!";
					}		
					
				}
			}
			
		}, this);
	}

	ko.applyBindings(new checkpwd());
});