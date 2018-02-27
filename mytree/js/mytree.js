//循环前边名字
function treeFor(el,arr,heads,top){
    el.html(" ");
    if(top){
	 treeHead(el,heads)
    }
	for (var i = 0; i <arr.length; i++) {
		var item=arr[i]
		var li=document.createElement("li");
		$(li).css("padding-left","20px");
		$(li).addClass("treeNode");
		$(li).append('<div class="icon-wrap" ><i class="iconfont icon-mytree-close" style="cursor: pointer;"></i></div><span title="'+item.libraryName+'">'+item.libraryName+'</span>');
		el.append(li);
		if(item.libraryTask&&item.libraryTask.length){
			var subul =document.createElement("ul");
			$(subul).css("padding-left","20px");
			for (var j = 0; j < item.libraryTask.length; j++) {
				var subitem=item.libraryTask[j];
				var subli=document.createElement("li");
				$(subli).addClass("treeNode");
				treeHead(subli,heads,subitem);
				$(subul).append(subli).hide();
			}
		}
		if(item.childrenLibrary){
			treeFor($(subul),item.childrenLibrary,heads);
		}
		el.append(subul);
	}
}
//循环行
function treeHead(el,heads,node){
	
	var header=document.createElement("li");
	var isHeader=!node;
	$(header).addClass("treeNode");
	for (var i = 0; i < heads.length; i++) {
		var item=heads[i];
		var span=document.createElement("span");
		if(item.width=='auto'){
			$(span).css("flex",1);
		}else{
			$(span).width(item.width);
		}
		if(node){
			//判断任务等级
			if(item.name=='priority'){
				$(span).addClass("priority "+"state"+node[item.name]);
				if(node[item.name] == '1'){
					$(span).html("重要紧急");
				}else if(node[item.name] == '2'){
					$(span).html("重要不紧急");
				}else if(node[item.name] == '3'){
					$(span).html("不重要不紧急");
				}
			}else{
				if(item.name=='name'){
					$(span).attr("data-id",node.id);
					$(span).addClass("taskName");
					$(span).css("cursor","pointer");
				}
				if(['leader','partner'].indexOf(item.name)>=0){
					$(span).addClass("blue ");
				}
				if(item.name=='deadline'){
					if(node[item.name]){
						$(span).text(getDateTime(node[item.name]));
						$(span).attr('title',getDateTime(node[item.name]));
					}
				}else if(item.name=='config'){
					$(span).addClass("del");
					$(span).text("删除");
					$(span).attr("data-id",node.id);
				}else{
					$(span).text(node[item.name])
					$(span).attr('title',node[item.name]);
				}
			}
		}else{
			$(span).text(item.title);
			$(span).attr('title',item.title);
		}
		if(isHeader){
			$(header).append(span);
		}else{
			$(span).addClass("leaf");
			$(span).data("id",node.id);
			$(el).append(span);
		}
	}
	if(isHeader){
		$(header).addClass("mytree-header");
		$(el).append(header);
	}else{
		$(el).css("padding-left",'15px');
	}
}
//点击打开关闭
$(".myTree").on('click',".icon-wrap",function(){
	$(this).children("i").toggleClass("icon-mytree-close");
	$(this).children("i").toggleClass("icon-mytree-open");
	$(this).parent().next("ul").slideToggle();
})
//时间转化
function getDateTime(e){
	if(e){
		var time = new Date(e);
		var y = time.getFullYear();
		var m = time.getMonth() + 1;
		var d = time.getDate();
		return y + '-' + m + '-' + d
	}
}