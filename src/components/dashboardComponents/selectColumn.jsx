"use client"
import { Select } from '@prisma/client/runtime/library';
import React, { useState } from 'react'

export default function SelectColumn({post}) {
    const [selectedValues, setSelectedValues] = useState({});

    const handleChange = async (event, postId) => {
        if (event.target == null) return;

        const feature_id = event.target.value;
        const post_id = postId;
    
        if (feature_id === "-") return;
    
        try {
            const response = await fetch("/api/edit_feature", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ "id": parseInt(feature_id), "postId": parseInt(post_id) }),
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              console.error("Failed to update feature:", errorData);
              alert(`Error: ${errorData.error}`);
              return;
            }
        
            const data = await response.json();
            console.log("Feature updated successfully:", data);
            alert("Feature updated successfully!");
          } catch (error) {
            console.error("An error occurred while updating feature:", error);
            alert("An unexpected error occurred. Please try again.");
          }
    
        setSelectedValues((prevSelectedValues) => ({
          ...prevSelectedValues,
          [postId]: feature_id,
        }));
      };

  return (
      <select
        value={selectedValues[post.id] || ''}
        onChange={(event) => handleChange(event, post.id)}
        name="demo-category"
        id={`demo-category-${post.id}`}>

        <option value="">-</option>
        {[1, 2, 3, 4].map((option) => (
        
        <option
            key={option}
            value={option}
            disabled={Object.values(selectedValues).includes(String(option)) && selectedValues[post.id] !== String(option)}>
            {option}
        </option>
        
        ))}
      </select>    
  )
}
