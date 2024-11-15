"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useRef, useEffect } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, { success: null, error: null });
  const formRef = useRef(null);
  useEffect(() => {
    if (state?.success) {
      formRef.current.reset();
    }
  }, [state?.success]);

  return (
    <form ref={formRef} action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="Image URL" />
      <select name="isAdmin" defaultValue="">
        <option value="" disabled>
          Is Admin?
        </option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button type="submit">Add</button>
      {state?.error && <p className={styles.error}>{state.error}</p>}
      {state?.success && <p className={styles.success}>{state.success}</p>}
    </form>
  );
};

export default AdminUserForm;
