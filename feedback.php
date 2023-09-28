<?php
    // Check if form is submitted
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // Check if name and email are empty
        if(empty(trim($_POST["name"])) || empty(trim($_POST["email"]))){
            echo "Please enter your name and email.";
        }
        else{
            $name = trim($_POST["name"]);
            $email = trim($_POST["email"]);
            $message = trim($_POST["message"]);
            // Insert data into database
            // Replace "database_name", "your_username", "your_password", and "table_name" with your actual database information
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "Dietician";

            $conn = new mysqli($servername, $username, $password, $dbname);

            if($conn->connect_error){
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO feedback (Name, Email, Message) VALUES (?,?,?)";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $name, $email,$message);

            if($stmt->execute()){
                echo "feedback received successfully";
            }
            else{
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }