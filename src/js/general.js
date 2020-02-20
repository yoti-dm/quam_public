$(document).ready(function()
{
    $("h2").each(function()
    {
		var hyphenated = $(this).text().toLowerCase().replace(/\s/g,'-');
		$(this).attr('id',hyphenated);
	});
});