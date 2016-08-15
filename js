/* JS for getting GA DataLayer push data on a webpage */
(function() {

	var is_dataLayer_exist = false,
		 dataLayer_arr = [],
		 idx_result = "",
		 sort_arr = [],
		 sort_element = {
			index: 0,
			value: ""
		};

	var _init = function() {
		//Angular Article, Contributor, CSR pages
		if (window.dataLayer !== undefined) {
			console.log("DataLayer Exist!");
			is_dataLayer_exist = true;
			dataLayer_arr = push_all_pageviews(dataLayer);
			angular_detect(dataLayer_arr);
		} else {
			alert("DataLayer not Exists!");
		}
	};

	var angular_detect = function(args) {
		if (is_dataLayer_exist === true) {
			if(document.getElementById("gtm_bookmarklet") === null){
				create_panel();
				add_result(args);
			} else {
				document.getElementById("gtm_bookmarklet").remove();
			}
		}
	};

	var push_all_pageviews = function(obj_arr) {
		var arr = [];
		for(var i = 0; i < obj_arr.length; i++) {
			if(i === 0) {
				arr.push(obj_arr[0]);
			} else if(obj_arr[i].event && obj_arr[i].event === "analyticsVPV") {
				arr.push(obj_arr[i]);
			}
		}
		console.log(arr);
		return arr;
	};


	var create_panel = function() {

		//Result Div Style
		var result_panel = document.createElement("div");
		result_panel.id = "gtm_bookmarklet";
		result_panel.style.width = "auto";
		result_panel.style.height = "auto";
		result_panel.style.backgroundColor = "#2196F3";
		result_panel.style.color = "#000000";
		result_panel.style.opacity = "1.0";
		result_panel.style.position = "fixed";
		result_panel.style.zIndex = "999999";
		result_panel.style.marginLeft = "68%";
		result_panel.style.paddingTop = "0.5%";
		result_panel.style.paddingLeft = "2%";
		result_panel.style.paddingBottom = "2%";
		result_panel.style.paddingRight = "2%";
		result_panel.style.fontSize = "14px";

		add_panel(result_panel);

		document.getElementById("gtm_bookmarklet").innerHTML = "<h1 style='width:100%; text-align:center; color:#faff00; font-size=12px;'>DataLayer Results</h1><br>";
	};

	var add_panel = function(result_panel) {
		document.body.insertBefore(result_panel, document.body.childNodes[0]);
	};

	var detect_value = function(val){
		if (val == "account") {

			idx_result = "CD-1";

		} else if(val == "author" || val == "vpvAuthor") {

			idx_result = "CD-2";

		} else if(val == "site" || val == "vpvSite") {

			idx_result = "CD-3";

		} else if(val == "channel" || val == "vpvChannel") {

			idx_result = "CD-4";

		} else if(val == "slot" || val == "vpvSlot") {

			idx_result = "CD-5";

		} else if(val == "huid" || val == "vpvHuid") {

			idx_result = "CD-6";

		} else if(val == "suid" || val == "vpvSuid") {

			idx_result = "CD-7";

		} else if(val == "uuid" || val == "vpvUuid") {

			idx_result = "CD-8";

		} else if(val == "contribType" || val == "adVoice"  || val == "vpvContribType" || val == "vpvAdVoice") {

			idx_result = "CD-9";

		} else if(val == "blogType" || val == "vpvBlogType") {

			idx_result = "CD-11";

		} else if(val == "brandVoice" || val == "communityVoice" || val == "vpvBrandVoice" || val == "vpvCommunityVoice") {

			idx_result = "CD-12";

		} else if(val == "templateType" || val == "subtype" || val == "vpvTemplateType" || val == "vpvSubtype"){

			idx_result = "CD-13";

		} else if(val == "articleGallery") {

			idx_result = "CD-14";

		} else if(val == "DFPSite" || val == "vpvDFPSite") {

			idx_result = "CD-15";

		} else if(val == "DFPZone" || val == "vpvDFPZone") {

			idx_result = "CD-16";

		} else if(val == "published" || val == "vpvPublished") {

			idx_result = "CD-17";

		} else if(val == "paragraphs" || val == "vpvParagraphs") {

			idx_result = "CD-18";

		} else if(val == "categories" || val == "vpvCategories") {

			idx_result = "CD-19";

		} else if(val == "edit" || val == "vpvEdit") {

			//Need to Confirm
			idx_result = "CD-20";

		} else if(val == "hashtags" || val == "vpvHashTags") {

			idx_result = "CD-21";

		} else if(val == "shareParent" || val == "vpvShareParent") {

			idx_result = "CD-22";

		} else if(val == "shareChild" ||  val == "vpvShareChild") {

			idx_result = "CD-23";

		} else if(val == "naturalID" || val == "vpvNaturalID") {

			idx_result = "CD-24";

		} else if(val == "intendedpage") {

			idx_result = "CD-31";

		} else if(val == "pageNumber" || val == "vpvPageNumber") {

			idx_result = "CD-33";

		} else if(val == "pageTotal" || val == "vpvPageTotal") {

			idx_result = "CD-34";

		} else if(val == "publishHour" || val == "vpvPublishHour") {

			idx_result = "CD-35";

		} else if(val == "updateDate" ||  val == "vpvUpdateDate") {

			idx_result = "CD-36";

		} else if(val == "updateHour" || val == "vpvUpdateHour") {

			idx_result = "CD-37";

		} else if(val == "section" || val == "vpvSection") {

			idx_result = "CD-38";

		} else if(val == "adLight"){

			idx_result = "CD-39";

		} else if(val == "paginate" || val == "doNotPaginate" || val == "vpvPaginate" || val == "vpvDoNotPaginate") {

			idx_result = "CD-40";

		} else if(val == "videoPlacement" || val == "vpvVideoPlacement") {

			idx_result = "CD-42";

		}
		return idx_result;
	};

	var add_result = function(args) {
		sort_dataLayer(args);
		sort_arr.forEach(function(val){
			add_text(val.value);
		});
	};

	var add_text = function(args) {
		//Result Text Style
		var node = document.createElement('p');
		node.style.marginTop = "4px";

		var textNode = document.createTextNode(args);
		node.appendChild(textNode);
		document.getElementById("gtm_bookmarklet").appendChild(node);
	};

	var sort_dataLayer = function(args) {

		for(var i = 0; i < args.length; i++){
			Object.getOwnPropertyNames(args[i]).forEach(function(val, idx) {
				sort_element = {
					index: detect_value(val).replace("CD-", ""),
					value: idx_result + ": " + val + ' -> ' + args[idx][val]
				};
				sort_arr.push(sort_element);
			});

			sort_arr.sort(function(a,b) {
				return a.index - b.index;
			});
		}

		return sort_arr;
	};

	//Execute function
	_init();
	
})();
