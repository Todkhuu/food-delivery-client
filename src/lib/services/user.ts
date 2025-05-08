import axios from "axios";

export const getCurrentUser = async (id: string | false | null) => {
  if (!id) return null;
  try {
    const res = await axios.get(`http://localhost:8000/auth/me/${id}`);
    console.log("res", res.data.user);
    return res.data.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return;
    }
  }
};
