import { Chip, TextField } from "@mui/material";
import { async } from "q";
import { useState } from "react";

let newTagList = [];
export const returnedList = async () => {
  console.log(newTagList);
  return newTagList;
};

export const clearTagsList = async () => {
  newTagList = [];
};

const TagsInput = () => {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");

  /**
   * Adds tags after pressing enter key
   * @param {*} e
   */
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    newTagList.push({ tagName: text.trim() });
    setTags([...tags, { tagName: text.trim() }]);
    setText("");
  };

  /**
   * Deletes a tag after clicking.
   * @param {*} index
   */
  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
    newTagList = newTagList.filter((el, i) => i !== index);
    console.log(newTagList);
  };

  return (
    <>
      <span>
        <TextField
          sx={{
            margin: 0.75,
            input: { color: "whitesmoke", background: "#545ac4" },
          }}
          label="Tags"
          onKeyDown={handleKeyDown}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          {tags.map((item, index) => (
            <span>
              <Chip
                label={item.tagName}
                onDelete={() => removeTag(index)}
                sx={{
                  backgroundColor: "#0000ff33",
                  color: "white",
                  "& .MuiChip-deleteIcon": { color: "#A8BA30" },
                }}
              />
            </span>
          ))}
        </div>
      </span>
    </>
  );
};

export default TagsInput;
