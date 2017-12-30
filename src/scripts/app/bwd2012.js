var globals = {
	topTab: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/bwd_topGrab_over.gif',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/bwd_topGrab.gif'
	},
	arrowLeft: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-left-on.png',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-left.png'
	},
	arrowRight: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-right-on.png',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-right.png'
	},
	bigArrowLeft: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-left630-on.gif',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-left630.gif'
	},
	bigArrowRight: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-right630-on.gif',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/scroll-right630.gif'
	},
	twitter: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/icon_twitter-on.png',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/icon_twitter.png'
	},
	facebook: {
		on: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/icon_Facebook-on.png',
		off: new Image().src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/icon_Facebook-2.png'
	},
	page: {
		pageLink: encodeURIComponent(location.href),
		pageTitle: encodeURIComponent(document.title),
		twitterLink: '//twitter.com/home?status=' + encodeURIComponent(document.title) + encodeURIComponent(': ') + encodeURIComponent(location.href),
		facebookLink: '//www.facebook.com/sharer.php?u=' + encodeURIComponent(location.href) + '&t=' + encodeURIComponent(document.title)
	}
};

function rolloverTopTab(event) {
	var target = $(event.currentTarget);
	var actionType = 'off';
	if (event.type == 'mouseenter') {
		actionType = 'on';
	}
	var imgTarget = 'topTab';
	$('img', target).attr('src', globals[imgTarget][actionType]);
}

function rolloverFacebook(event) {
	var actionType = 'off';
	if (event.type == 'mouseenter') {
		actionType = 'on';
	}
	$('#facebookLink img').attr('src', globals.facebook[actionType]);
}

function rolloverTwitter(event) {
	var actionType = 'off';
	if (event.type == 'mouseenter') {
		actionType = 'on';
	}
	$('#twitterLink img').attr('src', globals.twitter[actionType]);
}

function MM_swapImgRestore() { //v3.0
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p) d.MM_p = new Array();
		var i, j = d.MM_p.length,
			a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}

function MM_findObj(n, d) { //v4.01
	var p, i, x;
	if (!d) d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all) x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById) x = d.getElementById(n);
	return x;
}

function MM_swapImage() { //v3.0
	var i, j = 0,
		x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc) x.oSrc = x.src;
			x.src = a[i + 2];
		}
}

var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-364750-43']);
_gaq.push(['_setAccount', 'UA-19234926-1']);
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : '//www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

function login() {
	$('#loginStatus').hide();
	if ($('#loginEmail').val().length || $('#loginPassword').val().length) {
		var rememberLogin = 0;
		if ($('#rememberLogin:checked').length) {
			rememberLogin = 1;
		}
		$.get('_ajax/login.cfm', {
			rand: Math.random(),
			email: $('#loginEmail').val(),
			password: $('#loginPassword').val(),
			rememberLogin: rememberLogin
		}, function (data) {
			var arrResult = data.split('|');
			var result = parseInt(arrResult[0]);
			if (result == 1) {
				if (arrResult.length == 1) {
					window.location.reload(true);
				} else {
					window.location.href = arrResult[1];
				}
			} else if (result == 2) {
				$('#loginStatus').html('We\'re sorry, but you have not yet verified your account by clicking on the link in the verification email we sent you.  If you have mislaid this email, <a href="javascript:void(0)" id="verificationResendLink" class="linkRed">please click here to resend</a>.');
				$('#loginStatus').fadeIn('fast');
				$.fancybox.resize();
			} else if (result == 0) {
				$('#loginStatus').html('We\'re sorry, but your login details were not recognised. Please try again.');
				$('#loginStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	} else {
		var errArr = new Array();
		if (!$('#loginEmail').val().length) {
			errArr[errArr.length] = 'registered email address';
		}
		if (!$('#loginPassword').val().length) {
			errArr[errArr.length] = 'password';
		}
		var warningText = 'Please enter your ';
		if (errArr.length == 2) {
			warningText += errArr[0] + ' and ' + errArr[1];
		} else {
			warningText += errArr[0];
		}
		warningText += '.';
		$('#loginStatus').html(warningText);
		$('#loginStatus').fadeIn('fast');
		$.fancybox.resize();
	}
}

function clientLogin() {
	$('#clientLoginStatus').hide();
	if ($('#clientLoginEmail').val().length || $('#clientLoginPassword').val().length) {
		$.get('_ajax/client_login.cfm', {
			rand: Math.random(),
			email: $('#clientLoginEmail').val(),
			password: $('#clientLoginPassword').val()
		}, function (data) {
			var arrResult = data.split('|');
			var result = parseInt(arrResult[0]);
			if (result == 1) {
				if (arrResult.length == 1) {
					window.location.href = 'indexc647.html';
				} else {
					window.location.href = arrResult[1];
				}
			} else if (result == 2) {
				$('#clientLoginStatus').html('We\'re sorry, but we have not yet approved your account.');
				$('#clientLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			} else if (result == 0) {
				$('#clientLoginStatus').html('We\'re sorry, but your login details were not recognised. Please try again.');
				$('#clientLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	} else {
		var errArr = new Array();
		if (!$('#clientLoginEmail').val().length) {
			errArr[errArr.length] = 'registered email address';
		}
		if (!$('#clientLoginPassword').val().length) {
			errArr[errArr.length] = 'password';
		}
		var warningText = 'Please enter your ';
		if (errArr.length == 2) {
			warningText += errArr[0] + ' and ' + errArr[1];
		} else {
			warningText += errArr[0];
		}
		warningText += '.';
		$('#clientLoginStatus').html(warningText);
		$('#clientLoginStatus').fadeIn('fast');
		$.fancybox.resize();
	}
}

function pressLogin() {
	$('#pressLoginStatus').hide();
	if ($('#pressLoginEmail').val().length || $('#pressLoginPassword').val().length) {
		$.get('_ajax/press_login.cfm', {
			rand: Math.random(),
			email: $('#pressLoginEmail').val(),
			password: $('#pressLoginPassword').val()
		}, function (data) {
			var arrResult = data.split('|');
			var result = parseInt(arrResult[0]);
			if (result == 1) {
				if (arrResult.length == 1) {
					window.location.href = 'indexe100.html';
				} else {
					window.location.href = arrResult[1];
				}
			} else if (result == 2) {
				$('#pressLoginStatus').html('We\'re sorry, but we have not yet approved your account.');
				$('#pressLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			} else if (result == 0) {
				$('#pressLoginStatus').html('We\'re sorry, but your login details were not recognised. Please try again.');
				$('#pressLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	} else {
		var errArr = new Array();
		if (!$('#pressLoginEmail').val().length) {
			errArr[errArr.length] = 'registered email address';
		}
		if (!$('#pressLoginPassword').val().length) {
			errArr[errArr.length] = 'password';
		}
		var warningText = 'Please enter your ';
		if (errArr.length == 2) {
			warningText += errArr[0] + ' and ' + errArr[1];
		} else {
			warningText += errArr[0];
		}
		warningText += '.';
		$('#pressLoginStatus').html(warningText);
		$('#pressLoginStatus').fadeIn('fast');
		$.fancybox.resize();
	}
}

function dealerLogin() {
	$('#dealerLoginStatus').hide();
	if ($('#dealerLoginEmail').val().length || $('#dealerLoginPassword').val().length) {

		$.get('_ajax/dealer_login.cfm', {
			rand: Math.random(),
			email: $('#dealerLoginEmail').val(),
			password: $('#dealerLoginPassword').val()
		}, function (data) {
			var arrResult = data.split('|');
			var result = parseInt(arrResult[0]);
			if (result == 1) {
				if (arrResult.length == 1) {
					window.location.href = 'index-2.html';
				} else {
					window.location.href = arrResult[1];
				}
			} else if (result == 2) {
				$('#dealerLoginStatus').html('We\'re sorry, but we have not yet approved your account.');
				$('#dealerLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			} else if (result == 0) {
				$('#dealerLoginStatus').html('We\'re sorry, but your login details were not recognised. Please try again.');
				$('#dealerLoginStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	} else {
		var errArr = new Array();
		if (!$('#dealerLoginEmail').val().length) {
			errArr[errArr.length] = 'registered email address';
		}
		if (!$('#dealerLoginPassword').val().length) {
			errArr[errArr.length] = 'password';
		}
		var warningText = 'Please enter your ';
		if (errArr.length == 2) {
			warningText += errArr[0] + ' and ' + errArr[1];
		} else {
			warningText += errArr[0];
		}
		warningText += '.';
		$('#dealerLoginStatus').html(warningText);
		$('#dealerLoginStatus').fadeIn('fast');
		$.fancybox.resize();
	}
}

function passwordReminder() {
	$('#passwordReminderStatus').hide();
	if (!$('#passwordReminderEmail').val().length) {
		$('#passwordReminderStatus').html('Please enter the email address your account is registered with.');
		$('#passwordReminderStatus').fadeIn('fast');
		$.fancybox.resize();
	} else {
		$.get('_ajax/send_password_reminder.html', {
			rand: Math.random(),
			email: $('#passwordReminderEmail').val()
		}, function (data) {
			if (parseInt(data) == 1) {
				$('#passwordReminderStatus').removeClass('textRed').addClass('textGreen').html('Success! We\'ve sent a reminder to your inbox. Please allow a couple of minutes for it to arrive');


				$('#passwordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			} else {
				$('#passwordReminderStatus').html('We\'re sorry, but the email address you supplied does not exist on our database.');
				$('#passwordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	}
}

function clientPasswordReminder() {
	$('#clientPasswordReminderStatus').hide();
	if (!$('#clientPasswordReminderEmail').val().length) {
		$('#clientPasswordReminderStatus').html('Please enter the email address your account is registered with.');
		$('#clientPasswordReminderStatus').fadeIn('fast');
		$.fancybox.resize();
	} else {
		$.get('_ajax/send_clientpassword_reminder.cfm', {
			rand: Math.random(),
			email: $('#clientPasswordReminderEmail').val()
		}, function (data) {
			if (parseInt(data) == 1) {
				$('#clientPasswordReminderStatus').removeClass('textRed').addClass('textGreen').html('Success! We\'ve sent a reminder to your inbox. Please allow a couple of minutes for it to arrive');
				$('#clientPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			} else {
				$('#clientPasswordReminderStatus').html('We\'re sorry, but the email address you supplied does not exist on our database.');
				$('#clientPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	}
}

function pressPasswordReminder() {
	$('#pressPasswordReminderStatus').hide();
	if (!$('#pressPasswordReminderEmail').val().length) {
		$('#pressPasswordReminderStatus').html('Please enter the email address your account is registered with.');
		$('#pressPasswordReminderStatus').fadeIn('fast');
		$.fancybox.resize();
	} else {
		$.get('_ajax/send_clientpassword_reminder.cfm', {
			rand: Math.random(),
			email: $('#pressPasswordReminderEmail').val()
		}, function (data) {
			if (parseInt(data) == 1) {
				$('#pressPasswordReminderStatus').removeClass('textRed').addClass('textGreen').html('Success! We\'ve sent a reminder to your inbox. Please allow a couple of minutes for it to arrive');
				$('#pressPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			} else {
				$('#pressPasswordReminderStatus').html('We\'re sorry, but the email address you supplied does not exist on our database.');
				$('#pressPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	}
}

function dealerPasswordReminder() {
	$('#dealerPasswordReminderStatus').hide();
	if (!$('#dealerPasswordReminderEmail').val().length) {
		$('#dealerPasswordReminderStatus').html('Please enter the email address your account is registered with.');
		$('#dealerPasswordReminderStatus').fadeIn('fast');
		$.fancybox.resize();
	} else {
		$.get('_ajax/send_clientpassword_reminder.cfm', {
			rand: Math.random(),
			email: $('#dealerPasswordReminderEmail').val()
		}, function (data) {
			if (parseInt(data) == 1) {
				$('#dealerPasswordReminderStatus').removeClass('textRed').addClass('textGreen').html('Success! We\'ve sent a reminder to your inbox. Please allow a couple of minutes for it to arrive');
				$('#dealerPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			} else {
				$('#dealerPasswordReminderStatus').html('We\'re sorry, but the email address you supplied does not exist on our database.');
				$('#dealerPasswordReminderStatus').fadeIn('fast');
				$.fancybox.resize();
			}
		});
	}
}

function resendVerificationEmail() {
	$.get('_ajax/resend_verification_email.cfm', {
		rand: Math.random(),
		email: $('#loginEmail').val()
	}, function (data) {
		$('#loginStatus').html('Your verification email has been resent. Please allow a couple of minutes for it to arrive');
		$.fancybox.resize();
	});
}

function isValidEmail(email) {
	var emailRegExp = /^\w(?:\w|-|\.(?!\.|@))*@\w(?:\w|-|\.(?!\.))*\.\w{2,4}/
	var result = email.match(emailRegExp);
	if ((result && result[0].length != email.length) || !result) {
		return false
	} else {
		return true
	}
}

function addProduct(event) {
	var id = event.currentTarget.id.split('_')[1];
	var colourID = 0;
	var colourOption = $('#colourOptionLink_' + id);
	if (colourOption.length) {
		colourID = parseInt(colourOption.data('colour'), 10);
	}
	$.getJSON('_ajax/basket.cfm', {
		rand: Math.random(),
		product: id,
		colour: colourID
	}, function (data) {
		/*var url = '//'+location.hostname+location.pathname;
		if (location.search.length) {
			var urlvars = location.search.split('?')[1].split('&');
			var newurlvars = new Array();
			url += '?';
			for (var i=0;i<urlvars.length;i++) {
				if (urlvars[i].toLowerCase() != 'showbasket=1') {
					newurlvars[newurlvars.length] = urlvars[i];
				}
			}
			newurlvars[newurlvars.length] = 'showbasket=1';
			url += newurlvars.join('&');
		} else {
			url += '?showBasket=1';
		}
		window.location.href=url;*/
		//$('#viewBasketLink').click();
		refreshBasket(true);
	});
}

function sendFriend() {
	var errArr = new Array();
	if (!$('#emailFriend_senderName').val().length) {
		errArr[errArr.length] = 'Your name';
	}
	if (!$('#emailFriend_senderEmail').val().length || !isValidEmail($('#emailFriend_senderEmail').val())) {
		errArr[errArr.length] = 'Your email must be a valid email address';
	}
	if (!$('#emailFriend_recipientName').val().length) {
		errArr[errArr.length] = 'Your friend\'s name';
	}
	if (!$('#emailFriend_recipientEmail').val().length || !isValidEmail($('#emailFriend_recipientEmail').val())) {
		errArr[errArr.length] = 'Your friend\'s email must be a valid email address';
	}
	if (errArr.length) {
		alert('Please complete the following:\n\n- ' + errArr.join('\n- '));
	} else {
		$.get('_ajax/email_friend.cfm', {
			rand: Math.random(),
			sendername: $('#emailFriend_senderName').val(),
			senderemail: $('#emailFriend_senderEmail').val(),
			recipientname: $('#emailFriend_recipientName').val(),
			recipientemail: $('#emailFriend_recipientEmail').val(),
			pagelink: decodeURIComponent(page.pageLink),
			pagetitle: decodeURIComponent(page.pageTitle)
		}, function (data) {
			$('#emailFriendSentLink').click();
		});
	}
}

function register() {
	var errArr = new Array();
	var genderChecked = 0;
	var gender = 'male';
	if (!$('#registerFirstname').val().length) {
		errArr[errArr.length] = 'Firstname';
	}
	if (!$('#registerLastname').val().length) {
		errArr[errArr.length] = 'Lastname';
	}
	if (!$('#registerEmail').val().length) {
		errArr[errArr.length] = 'Email';
	} else if (!isValidEmail($('#registerEmail').val())) {
		errArr[errArr.length] = 'Email is not a valid email address';
	}
	if ($('#registerPassword').val().length < 6) {
		errArr[errArr.length] = 'Password should be a minimum of 6 characters';
	} else if ($('#registerPassword').val() != $('#registerPassword2').val()) {
		errArr[errArr.length] = 'Passwords do not match';
	}
	if ($('#genderM:checked').length || $('#genderF:checked').length) {
		genderChecked = 1;
	}
	if (!genderChecked) {
		errArr[errArr.length] = 'Gender';
	} else {
		if ($('#genderF:checked').length) {
			gender = 'female';
		}
	}
	if (errArr.length) {
		alert('Please complete the following:\n\n- ' + errArr.join('\n- '));
	} else {
		$.get('_ajax/check_email.cfm', {
			rand: Math.random(),
			email: $('#registerEmail').val()
		}, function (data) {
			if (parseInt(data) != 0) {
				alert('Apologies, but this email address is already registered by a user.\n\nIf this is your email address, please try logging in with your registered details.');
			} else {
				$.get('_ajax/register_user.html', {
					rand: Math.random(),
					firstname: $('#registerFirstname').val(),
					lastname: $('#registerLastname').val(),
					email: $('#registerEmail').val(),
					password: $('#registerPassword').val(),
					gender: gender
				}, function (data) {
					$('#registerCompleteLink').click();
				});
			}
		});
	}
}

function clientRegister() {
	var errArr = new Array();
	if (!$('#clientRegisterFirstname').val().length) {
		errArr[errArr.length] = 'Firstname';
	}
	if (!$('#clientRegisterLastname').val().length) {
		errArr[errArr.length] = 'Lastname';
	}
	if (!$('#clientRegisterCompany').val().length) {
		errArr[errArr.length] = 'Company';
	}
	if (!$('#clientRegisterEmail').val().length) {
		errArr[errArr.length] = 'Email';
	} else if (!isValidEmail($('#clientRegisterEmail').val())) {
		errArr[errArr.length] = 'Email is not a valid email address';
	}
	if ($('#clientRegisterPassword').val().length < 6) {
		errArr[errArr.length] = 'Password should be a minimum of 6 characters';
	} else if ($('#clientRegisterPassword').val() != $('#clientRegisterPassword2').val()) {
		errArr[errArr.length] = 'Passwords do not match';
	}
	if (errArr.length) {
		alert('Please complete the following:\n\n- ' + errArr.join('\n- '));
	} else {
		$.get('_ajax/check_client_email.cfm', {
			rand: Math.random(),
			email: $('#clientRegisterEmail').val()
		}, function (data) {
			if (parseInt(data) != 0) {
				alert('Apologies, but this email address is already registered by a user.\n\nIf this is your email address, please try logging in with your registered details.');
			} else {
				$.get('_ajax/register_client.cfm', {
					rand: Math.random(),
					firstname: $('#clientRegisterFirstname').val(),
					lastname: $('#clientRegisterLastname').val(),
					email: $('#clientRegisterEmail').val(),
					password: $('#clientRegisterPassword').val(),
					company: $('#clientRegisterCompany').val()
				}, function (data) {
					$('#clientRegisterCompleteLink').click();
				});
			}
		});
	}
}

function pressRegister() {
	var errArr = new Array();
	if (!$('#pressRegisterFirstname').val().length) {
		errArr[errArr.length] = 'Firstname';
	}
	if (!$('#pressRegisterLastname').val().length) {
		errArr[errArr.length] = 'Lastname';
	}
	if (!$('#pressRegisterCompany').val().length) {
		errArr[errArr.length] = 'Company';
	}
	if (!$('#pressRegisterEmail').val().length) {
		errArr[errArr.length] = 'Email';
	} else if (!isValidEmail($('#pressRegisterEmail').val())) {
		errArr[errArr.length] = 'Email is not a valid email address';
	}
	if (errArr.length) {
		alert('Please complete the following:\n\n- ' + errArr.join('\n- '));
	} else {
		$.get('_ajax/check_client_email.cfm', {
			rand: Math.random(),
			email: $('#pressRegisterEmail').val()
		}, function (data) {
			if (parseInt(data) != 0) {
				alert('Apologies, but this email address is already registered by a user.\n\nIf this is your email address, please try logging in with your registered details.');
			} else {
				$.get('_ajax/register_press.cfm', {
					rand: Math.random(),
					firstname: $('#pressRegisterFirstname').val(),
					lastname: $('#pressRegisterLastname').val(),
					email: $('#pressRegisterEmail').val(),
					company: $('#pressRegisterCompany').val()
				}, function (data) {
					$('#pressRegisterCompleteLink').click();
				});
			}
		});
	}
}

function dealerRegister() {
	var errArr = new Array();
	if (!$('#dealerRegisterDealer').val().length) {
		errArr[errArr.length] = 'Company';
	}
	if (!$('#dealerRegisterName').val().length) {
		errArr[errArr.length] = 'Contact Name';
	}
	if (!$('#dealerRegisterEmail').val().length) {
		errArr[errArr.length] = 'Email';
	} else if (!isValidEmail($('#dealerRegisterEmail').val())) {
		errArr[errArr.length] = 'Email is not a valid email address';
	}
	if (!$('#dealerRegisterTelephone').val().length) {
		errArr[errArr.length] = 'Telephone';
	}
	if (!$('#dealerRegisterAddress').val().length) {
		errArr[errArr.length] = 'Address';
	}
	if (errArr.length) {
		alert('Please complete the following:\n\n- ' + errArr.join('\n- '));
	} else {
		$.get('_ajax/check_dealer_email.cfm', {
			rand: Math.random(),
			email: $('#dealerRegisterEmail').val()
		}, function (data) {
			if (parseInt(data) != 0) {
				alert('Apologies, but this email address is already registered by a user.\n\nIf this is your email address, please try logging in with your registered details.');
			} else {
				$.get('_ajax/register_dealer.cfm', {
					rand: Math.random(),
					dealer: $('#dealerRegisterDealer').val(),
					name: $('#dealerRegisterName').val(),
					email: $('#dealerRegisterEmail').val(),
					telephone: $('#dealerRegisterTelephone').val(),
					address: $('#dealerRegisterAddress').val(),
					website: $('#dealerRegisterWebsite').val()
				}, function (data) {
					$('#dealerRegisterCompleteLink').click();
				});
			}
		});
	}
}

function updateBasket(data) {
	$('.basketTotal span,#headerBasketTotal').html(data.totalPrice);
	$('#headerBasketItems').text(data.items);
	if (!data.items) {
		$('.basketTop').html('<p>You currently have no products in your basket</p>');
	}
	$('.basketTop').jScrollPane();
}

function delBasketRow(event) {
	var row = event.currentTarget.id.split('_')[1];
	$.getJSON('_ajax/basket_delete.cfm', {
		rand: Math.random(),
		row: row
	}, function (data) {
		$('#basketItem_' + row).remove();
		updateBasket(data);
	});
}

function chkSelectedAddresses() {
	$.get('_ajax/check_delivery_addresses.cfm', {
		rand: Math.random()
	}, function (data) {
		if (data == '1') {
			window.location.href = 'index5af8.html'
		} else {
			alert('Please select a delivery and billing address for this order');
		}
	});
}

function updateQuantities() {
	var arrItems = new Array();
	$('.basketQuantity').each(function () {
		arrItems.push($(this).val());
	});
	if (arrItems.length) {
		$.getJSON('_ajax/basket_update.cfm', {
			rand: Math.random(),
			arrItems: arrItems.toString()
		}, function (data) {
			/*if (!data.items) {
				$('.basketTop').html('<p>You currently have no products in your basket</p>');
			}*/
			refreshBasket();
		});
	}
}

function refreshBasket(showBasket) {
	$.getJSON('_ajax/basket_get.cfm', {
		rand: new Date().getTime()
	}, function (data) {
		$('.basketBG').html(data.basketContents);
		$('#numBasketItems').text(data.TOTALITEMS);
		$('#basketTotalPrice').text(data.TOTALPRICE);
		if (typeof showBasket != "undefined") {
			$('#viewBasketLink').click();
		}
	});
}

$(document).ready(function () {
	$(document).on('hover', '#facebookLink', rolloverFacebook);
	$(document).on('hover', '#twitterLink', rolloverTwitter);
	$(document).on('click', '.buyLink', addProduct);
	$(document).on('click', '#signOutLink', function () {
		$.get('_ajax/logout.cfm', {
			rand: Math.random()
		}, function () {
			//window.location.reload( true );
			window.location.href = 'index-2.html';
		});
	});
	$('#facebookLink').attr({
		'href': globals.page.facebookLink,
		'target': '_blank'
	});
	$('#twitterLink').attr({
		'href': globals.page.twitterLink,
		'target': '_blank'
	});
	$('#viewBasketLink').fancybox({
		titleShow: false,
		overlayOpacity: 0,
		onComplete: function () {
			/*$('#fancybox-inner .basketWatch').each(function() {
				var watchID = $(this).attr('id').split('_')[1];
				populateWatches(watchID,'basket');
			});*/
			$('.itemImage').each(function () {
				if (parseInt($(this).attr('data-isWatch'))) {
					var $parentDiv = $('div', this);
					var iframeSrc = $parentDiv.attr('data-src');
					var iframeID = $parentDiv.attr('data-index');
					var $iframeVar = $('<iframe class="basketWatch" id="basketWatch_' + iframeID + '" width="95" height="95" frameborder="0"></iframe>')
					$parentDiv.append($iframeVar);
					$iframeVar.load(function () {
						populateWatches(iframeID, 'basket');
					});
					$iframeVar.attr({
						'src': iframeSrc
					});
				}
			});
			$('.basketTop').jScrollPane();
		}
	});
	$('#signInLink,.signInLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('#passwordReminderLink,#clientPasswordReminderLink,#pressPasswordReminderLink,#dealerPasswordReminderLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('.registrationLink,#clientRegistrationLink,#clientLoginLink,#pressRegistrationLink,#pressLoginLink,#dealerRegistrationLink,#dealerLoginLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('#registerCompleteLink,#clientRegisterCompleteLink,#pressRegisterCompleteLink,#dealerRegisterCompleteLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('#loginFailLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('#loginVerifyLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('#emailFriendSentLink').fancybox({
		titleShow: false,
		overlayOpacity: 0
	});
	$('.emailLink').fancybox({
		titleShow: false,
		overlayOpacity: 0,
		onStart: function () {
			$('#emailFriend_recipientName,#emailFriend_recipientEmail').val('');
		}
	});
	$('#reEmailLink').fancybox({
		titleShow: false,
		overlayOpacity: 0,
		onStart: function () {
			$('#emailFriend_recipientName,#emailFriend_recipientEmail').val('');
		}
	});
	$(document).on('click', '.basketDel', delBasketRow);
	$(document).on('click', '#basketUpdate', updateQuantities);
	$(document).on('click', '#loginButton', login);
	$(document).on('click', '#registerButton', register);
	$(document).on('click', '#clientLoginButton', clientLogin);
	$(document).on('click', '#clientRegisterButton', clientRegister);
	$(document).on('click', '#pressLoginButton', pressLogin);
	$(document).on('click', '#pressRegisterButton', pressRegister);
	$(document).on('click', '#dealerLoginButton', dealerLogin);
	$(document).on('click', '#dealerRegisterButton', dealerRegister);
	$(document).on('click', '#emailFriendButton', sendFriend);
	$(document).on('click', '#passwordReminderButton', passwordReminder);
	$(document).on('click', '#clientPasswordReminderButton', clientPasswordReminder);
	$(document).on('click', '#pressPasswordReminderButton', pressPasswordReminder);
	$(document).on('click', '#dealerPasswordReminderButton', dealerPasswordReminder);
	$(document).on('click', '#verificationResendLink', resendVerificationEmail);
	refreshBasket();
});

/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: //modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-sessionstorage-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-forms_placeholder-json-svg_filters-load
 */
;
window.Modernizr = function (a, b, c) {
		function C(a) {
			j.cssText = a
		}

		function D(a, b) {
			return C(n.join(a + ";") + (b || ""))
		}

		function E(a, b) {
			return typeof a === b
		}

		function F(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function G(a, b) {
			for (var d in a) {
				var e = a[d];
				if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function H(a, b, d) {
			for (var e in a) {
				var f = b[a[e]];
				if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function I(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + p.join(d + " ") + d).split(" ");
			return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
		}

		function J() {
			e.input = function (c) {
				for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
				return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
			}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
				for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
				return t
			}("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		var d = "2.6.1",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k = b.createElement("input"),
			l = ":)",
			m = {}.toString,
			n = " -webkit- -moz- -o- -ms- ".split(" "),
			o = "Webkit Moz O ms",
			p = o.split(" "),
			q = o.toLowerCase().split(" "),
			r = {
				svg: "//www.w3.org/2000/svg"
			},
			s = {},
			t = {},
			u = {},
			v = [],
			w = v.slice,
			x, y = function (a, c, d, e) {
				var f, i, j, k = b.createElement("div"),
					l = b.body,
					m = l ? l : b.createElement("body");
				if (parseInt(d, 10))
					while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j);
				return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), k.id = h, (l ? k : m).innerHTML += f, m.appendChild(k), l || (m.style.background = "", g.appendChild(m)), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i
			},
			z = function () {
				function d(d, e) {
					e = e || b.createElement(a[d] || "div"), d = "on" + d;
					var f = d in e;
					return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
				}
				var a = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img"
				};
				return d
			}(),
			A = {}.hasOwnProperty,
			B;
		!E(A, "undefined") && !E(A.call, "undefined") ? B = function (a, b) {
			return A.call(a, b)
		} : B = function (a, b) {
			return b in a && E(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function (b) {
			var c = this;
			if (typeof c != "function") throw new TypeError;
			var d = w.call(arguments, 1),
				e = function () {
					if (this instanceof e) {
						var a = function () {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(w.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(w.call(arguments)))
				};
			return e
		}), s.flexbox = function () {
			return I("flexWrap")
		}, s.canvas = function () {
			var a = b.createElement("canvas");
			return !!a.getContext && !!a.getContext("2d")
		}, s.canvastext = function () {
			return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
		}, s.touch = function () {
			var c;
			return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
				c = a.offsetTop === 9
			}), c
		}, s.indexedDB = function () {
			return !!I("indexedDB", a)
		}, s.hashchange = function () {
			return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
		}, s.history = function () {
			return !!a.history && !!history.pushState
		}, s.draganddrop = function () {
			var a = b.createElement("div");
			return "draggable" in a || "ondragstart" in a && "ondrop" in a
		}, s.rgba = function () {
			return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
		}, s.hsla = function () {
			return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
		}, s.multiplebgs = function () {
			return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
		}, s.backgroundsize = function () {
			return I("backgroundSize")
		}, s.borderimage = function () {
			return I("borderImage")
		}, s.borderradius = function () {
			return I("borderRadius")
		}, s.boxshadow = function () {
			return I("boxShadow")
		}, s.textshadow = function () {
			return b.createElement("div").style.textShadow === ""
		}, s.opacity = function () {
			return D("opacity:.55"), /^0.55$/.test(j.opacity)
		}, s.cssanimations = function () {
			return I("animationName")
		}, s.csscolumns = function () {
			return I("columnCount")
		}, s.fontface = function () {
			var a;
			return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
				var e = b.getElementById("smodernizr"),
					f = e.sheet || e.styleSheet,
					g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
				a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
			}), a
		}, s.generatedcontent = function () {
			var a;
			return y(['#modernizr:after{content:"', l, '";visibility:hidden}'].join(""), function (b) {
				a = b.offsetHeight >= 1
			}), a
		}, s.video = function () {
			var a = b.createElement("video"),
				c = !1;
			try {
				if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
			} catch (d) {}
			return c
		}, s.audio = function () {
			var a = b.createElement("audio"),
				c = !1;
			try {
				if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
			} catch (d) {}
			return c
		}, s.localstorage = function () {
			try {
				return localStorage.setItem(h, h), localStorage.removeItem(h), !0
			} catch (a) {
				return !1
			}
		}, s.sessionstorage = function () {
			try {
				return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
			} catch (a) {
				return !1
			}
		}, s.svg = function () {
			return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
		}, s.inlinesvg = function () {
			var a = b.createElement("div");
			return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
		}, s.svgclippaths = function () {
			return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
		};
		for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
		return e.input || J(), e.addTest = function (a, b) {
				if (typeof a == "object")
					for (var d in a) B(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if (e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, C(""), i = k = null,
			function (a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if (j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if (j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for (; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function () {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch (c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function (a) {
				return G([a])
			}, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
	}(this, this.document),
	function (a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function () {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function () {
						t.removeChild(l)
					}, 50);
					for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function (a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function (a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function (a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for (f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("index.html").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if (a) {
						if (e(a)) c || (j = function () {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if (Object(a) === a)
							for (n in m = function () {
									var b = 0,
										c;
									for (c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function (a) {
								return function () {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if (e(a)) g(a, 0, l, 0);
			else if (w(a))
				for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function (a, b) {
			z[a] = b
		}, B.addFilter = function (a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for (o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function () {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function (a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for (j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	}, Modernizr.addTest("placeholder", function () {
		return "placeholder" in (Modernizr.input || document.createElement("input")) && "placeholder" in (Modernizr.textarea || document.createElement("textarea"))
	}), Modernizr.addTest("json", !!window.JSON && !!JSON.parse), Modernizr.addTest("svgfilters", function () {
		var a = !1;
		try {
			a = typeof SVGFEColorMatrixElement !== undefined && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2
		} catch (b) {}
		return a
	});