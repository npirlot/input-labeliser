(function($){
	$.fn.labelise = function(){
		var $this = this, x = {};
			
		var defaults = {
			__module: "labeliser",
			__author: "Creations NP",
			__version: "1.0",
			debug: true,
			delimiter: ",",
			list: [],	//: { value: "", label: "" }
			value: null,
			input_selector: null,
			width: "100%",
			wrapper_class: "",
			labels_class: ""
		};
		
		if(typeof(arguments[0]) == "object"){
			x = $.extend(true, {}, defaults, arguments[0]);
		}else{
			x = defaults;
		}
		
		//: set some x's:
		x._vals = $this.val().split(x.delimiter);
		if(x.input_selector == null){
			x.input_field = $this;
		}else{
			x.input_field = $(x.input_selector);
		}
		
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
