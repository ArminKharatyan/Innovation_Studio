"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useRef, useEffect } from "react";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, { success: null, error: null });
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current.reset();
    }
  }, [state?.success]);
  
  return (
    <form ref={formRef} action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="desc" rows={10} />
      <button type="submit">Add</button>
      {state?.error && <p className={styles.error}>{state.error}</p>}
      {state?.success && <p className={styles.success}>{state.success}</p>}
    </form>
  );
};

export default AdminPostForm;
