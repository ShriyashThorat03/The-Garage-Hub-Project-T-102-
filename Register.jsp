<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action ="RegistrationServlet" method="post">
<table border ="2" align="center" bgcolor="gray">
<tr>
	<td>Registration No</td>
	<td><input type="text" name="rno"></td>
	</tr>
	
	<td>First Name</td>
	<td><input type="text" name="fname"></td>
	</tr>
	
	<td>Account Bal</td>
	<td><input type="text" name="accbal"></td>
	</tr>
	
	<td>User Name</td>
	<td><input type="text" name="uname"></td>
	</tr>
	
	<td>Password</td>
	<td><input type="password" name="pass"></td>
	</tr>
	
	
	
	<td><input type="submit" value="Register"></td>
	</tr>
	
	
	</table></form>
</body>
</html>

