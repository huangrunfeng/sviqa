$(document).ready(function() {
	var dt = $('#match_table').DataTable({
		"paging": false,
		"ordering": false,
		"info": false,
		"searching": false,
		"columnDefs": [{
			// 定义操作列
			"targets": 6,
			"data": null,
			"render": function(data, type, row) {
				var html = '<button class="edit_modal btn btn-success btn-xs"><i class="fa fa-edit"></i> 编辑</button>'
				html += ' <button class="delete btn btn-danger btn-xs"><i class="fa fa-times"></i> 删除</button>'
//				html += ' <button class="up btn btn-info btn-xs" data-placement="top" data-toggle="popover" data-content="亲，到顶啦！"><i class="fa fa-arrow-up"></i> 上升</button>'
//				html += ' <button class="down btn btn-warning btn-xs" data-placement="bottom" data-toggle="popover" data-content="亲，到底啦！"><i class="fa fa-arrow-down"></i> 下降</button>'
				return html;
			}
		}],
		language: {
			"processing": "处理中...",
			"lengthMenu": "显示 _MENU_ 项结果",
			"zeroRecords": "没有匹配结果",
			"info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"infoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"infoFiltered": "(由 _MAX_ 项结果过滤)",
			"infoPostFix": "",
			"search": "搜索:",
			"url": "",
			"emptyTable": "Please Add Match Rules...",
			"loadingRecords": "载入中...",
			"infoThousands": ",",
			"paginate": {
				"first": "首页",
				"previous": "上页",
				"next": "下页",
				"last": "末页"
			},
			"aria": {
				"sortAscending": ": 以升序排列此列",
				"sortDescending": ": 以降序排列此列"
			}
		}
	});
	
	function add_index(){
		dt.column(0).nodes().each(function(cell, i) {
	        cell.innerHTML = i + 1;
	    });
	};
	
	add_index();
	
	// 初始化刪除按钮
	$('#match_table tbody').on('click', 'button.delete', function(e) {
		var table = $('#match_table').DataTable();
		match_rules.splice(table.row($(this).parents('tr')).index(), 1);
		table.row($(this).parents('tr')).remove().draw();
		add_index();
	});

	// 初始化上升按钮
	$('#match_table tbody').on('click', 'button.up', function(e) {
		var table = $('#match_table').DataTable();
		var index = table.row($(this).parents('tr')).index();
		var btn = $(this);
		if ((index - 1) >= 0) {
			var data = table.data();
			table.clear();
			data.splice((index - 1), 0, data.splice(index, 1)[0]);
			match_rules.splice((index - 1), 0, match_rules.splice(index, 1)[0]);
			table.rows.add(data).draw();
			add_index();
			console.log(match_rules);
		} else {
			btn.popover('show');
            btn.on('shown.bs.popover', function () {
                setTimeout(function () {
                    btn.popover('hide');
                }, 2000);
            });
		}

	});

	// 初始化下降按钮
	$('#match_table tbody').on('click', 'button.down', function(e) {
		var table = $('#match_table').DataTable();
		var index = table.row($(this).parents('tr')).index();
		var max = table.rows().data().length;
		var btn = $(this);
		if ((index + 1) < max) {
			var data = table.data();
			table.clear();
			data.splice((index + 1), 0, data.splice(index, 1)[0]);
			match_rules.splice((index + 1), 0, match_rules.splice(index, 1)[0]);
			table.rows.add(data).draw();
			add_index();
		} else {
			btn.popover('show');
            btn.on('shown.bs.popover', function () {
                setTimeout(function () {
                    btn.popover('hide');
                }, 2000);
            });
		}
	});
});