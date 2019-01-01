Ext.define('ebmt.view.penerimamanfaat.program.Detail', {
	extend: 'Ext.window.Window',
	alias: 'widget.penerimamanfaat.program.detail',
	modal: true,
	bodyPadding:10,
	width: 800,
	minHeight:600,
	iconCls: 'icon_detail',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			tpl: Ext.create('Ext.XTemplate', 
				'<table cellpadding="0" cellspacing="0" border="0" style="width:100%">',
					'<tr>',
						'<td>',
							'<tpl for="foto_pemohon">',
								'<div class="thumbnail">',
									'<img src="{.}" height="60" data-qtip="<img src={.} />" />',
								'</div>',
							'</tpl>',
						'</td>',
						'<td>',
						    '<fieldset>',
						      '<legend>Identitas Penerima Manfaat by Program</legend>',
								'<table cellpadding="0" cellspacing="0" border="0" style="width:100%">',
								'<tr>',
								  '<td style="width:20%"><strong>Nama Program</strong></td><td style="width:10px">:</td><td style="width:30%">{nama_program}</td>',
								  '<td style="width:20%"><strong>Nama Pemohon</strong></td><td style="width:10px">:</td><td style="width:30%">{deskripsi_program}</td>',
								'</tr>',
								'</table>',
							'</fieldset>',
						    '<fieldset>',
						      '<legend>Alamat</legend>',
								'<table cellpadding="0" cellspacing="0" border="0" style="width:100%">',
								'<tr>',
								  '<td style="width:20%"><strong>Jalan</strong></td><td style="width:10px">:</td><td>{jalan}</td>',
								  '<td style="width:20%"><strong>Kodepos</strong></td><td style="width:10px">:</td><td>{kodepos}</td>',
								'</tr>',
								'<tr>',
								  '<td style="width:20%"><strong>Kelurahan</strong></td><td style="width:10px">:</td><td style="width:30%">{txt_kelurahan_desa}</td>',
								  '<td style="width:20%"><strong>Kecamatan</strong></td></td><td style="width:10px">:</td><td style="width:30%">{txt_kecamatan}</td>',
								'</tr>',
								'<tr>',
								  '<td style="width:20%"><strong>Kotamadya/Kabupaten</strong></td><td style="width:10px">:</td><td style="width:30%">{txt_kotamadya_kabupaten}</td>',
								  '<td style="width:20%"><strong>Propinsi</strong></td></td><td style="width:10px">:</td><td style="width:30%">{txt_propinsi}</td>',
								'</tr>',																								
								'</table>',
							'</fieldset>',
						    '<fieldset>',
						      '<legend>Kontak</legend>',
								'<table cellpadding="0" cellspacing="0" border="0" style="width:100%">',
								'<tr>',
								  '<td style="width:15%"><strong>Handphone</strong></td><td style="width:10px">:</td><td style="width:15%">{handphone}</td>',
								  '<td style="width:10%"><strong>Email</strong></td></td><td style="width:10px">:</td><td style="width:30%">{email}</td>',								
								  '<td style="width:15%"><strong>Telepon Rumah</strong></td></td><td style="width:10px">:</td><td style="width:20%">{kode_area_telepon}-{telepon_rumah}</td>',
								'</tr>',
								'</table>',
							'</fieldset>',	
						    '<fieldset>',
						      '<legend>Informasi Lainnya</legend>',
								'<table cellpadding="0" cellspacing="0" border="0" style="width:100%">',
								'<tr>',
								'<td style="width:15%"><strong>Keterangan</strong></td><td style="width:10px">:</td><td>{keterangan}</td>',
								'</tr>',
								'</table>',
							'</fieldset>',							
						'</td>',
					'</tr>',
				'</table>',
				'<fieldset>',
				  '<legend>Histori Ajuan</legend>',
				  '<table cellpadding="0" cellspacing="0" border="1" style="width:100%">',
				    '<thead>',
				      '<tr>',
				         '<th>Tanggal Ajuan</th>',
				         '<th>Deskripsi Ajuan</th>',
				         '<th>Karakter Program</th>',
				         '<th>Asnaf</th>',
				         '<th>Tanggal Persetujuan</th>',
				         '<th>Nominal Usulan</th>',
				         '<th>Nominal Disetujui</th>',
				      '</tr>',
				    '</thead>',
				    '<tbody>',
					  '<tpl for="Ajuans">',
					    '<tr>',
					       '<td style="text-align:center">{tgl_masuk}</td>',
					       '<td>{catatan}</td>',
					       '<td>{karakter_program}</td>',
					       '<td>{asnaf}</td>',
					       '<td style="text-align:center">{tgl_disetujui}</td>',
					       '<td style="text-align:right">{nilai_bantuan_usulan}</td>',
					       '<td style="text-align:right">{nilai_bantuan_disetujui}</td>',
					    '</tr>',
					  '</tpl>',
					 '</tbody>',
				  '</table>',
				'</fieldset>'
			)
		});
		me.callParent( arguments );
	}
});