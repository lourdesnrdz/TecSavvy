


$(function() {
// ------------------------------------------------------- //
// Multi Level dropdowns
// ------------------------------------------------------ //
	$("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
	event.preventDefault();
	event.stopPropagation();

	$("li.dropdown-submenu ul.dropdown-menu").removeClass("show");
	$(this).siblings().toggleClass("show");


	// if (!$(this).next().hasClass('show')) {
	//   $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	// }
	// $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
	//   $('.dropdown-submenu .show').removeClass("show");
	// });

	});
});
 