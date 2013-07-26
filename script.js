(function($){
	$.fn.labelise = function(){
		var $this = this,
			x = arguments[0];
			
		var defaults = {
			__module: "labeliser",
			__author: "Creations NP",
			version: "1.0",
			debug: true,
			delimiter: ",",
			list: [],	//: { value: "", label: "" }
			width: "100%",
			wrapper_class: "",
			labels_class: ""
		};
		
		if(typeof(arguments[0]) == "object"){
			x = $.extend(true, {}, defaults, arguments[0]);
		}
		
		x._vals = $this.val().split(x.delimiter);
		
		//: set labels:
		x.labels = []; //: { value: "", label: "", class: "" }
		
		
		if(x.debug == true){
			console.debug(x);
		}
		
		$this.data("labeliser", {
			_arguments: x
		});
		
		return $this;
	};
}(jQuery));
