"use client";
import { ChevronRight, CirclePlus, Mail } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [bookDetails, setBookDetails] = useState({
    name: "",
    genre: "",
    author: "",
  });

  const handleChange = (e) => {
    setBookDetails({
      ...bookDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleSaveBook = async () => {
    console.log("Book Details:", bookDetails);

    // sending book details to backend
    try {
      const accessToken = localStorage.getItem("access_token");

      const response = await axios.post(
        "https://4cc4-110-39-21-146.ngrok-free.app/books/create-book",
        bookDetails,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the successful login response here (e.g., save the token, redirect to another page)
      console.log("Book Added successfully:", response.data);

      // Adding book details to local storage and Storing token in localStorage
      localStorage.setItem("access_token", response.data.access_token);

      toast({
        title: "Success",
        description: "Book added successfully",
      });
    } catch (error) {
      console.log("Error in adding book", error);
      toast({
        title: "Error",
        description: "Cannot add book",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Book</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Book</DialogTitle>
              <DialogDescription>Enter book details</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col justify-start text-start gap-4">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input
                  id="name"
                  value={bookDetails.name}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col justify-start text-start gap-4">
                <Label htmlFor="genre" className="">
                  Genre
                </Label>
                <Input
                  id="genre"
                  value={bookDetails.genre}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col justify-start text-start gap-4">
                <Label htmlFor="author" className="">
                  Author
                </Label>
                <Input
                  id="author"
                  value={bookDetails.author}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleSaveBook}>
                Save Book
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Dashboard;
