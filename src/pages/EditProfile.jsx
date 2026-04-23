import "./EditProfile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

export default function EditProfile({ profile, setProfile }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...profile });
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
     
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

   
  const validate = () => {
    const newErrors = {};

    if (!form.ad.trim()) {
      newErrors.ad = "Ad boş ola bilməz";
    } else if (form.ad.trim().length < 2) {
      newErrors.ad = "Ad ən az 2 hərf olmalıdır";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email boş ola bilməz";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email düzgün formatda deyil";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);  
      return;  
    }

    setProfile(form);
    setShowToast(true);
    setTimeout(() => navigate("/profile"), 3000);
  };

  return (
    <section className="edit-page">
      <h1 className="edit-title">Profili Düzəlt</h1>

      <form className="card" onSubmit={handleSubmit} noValidate> 
        <div className="edit-row">
            <label className="label" htmlFor="ad">Ad</label> 
            <input
            id="ad" 
            className={`edit-input ${errors.ad ? "input-error" : ""}`}
            name="ad"
            value={form.ad}
            onChange={handleChange}
            aria-invalid={!!errors.ad} 
            aria-describedby={errors.ad ? "ad-error" : undefined} 
            />
            {errors.ad && (
            <p id="ad-error" className="error-msg" role="alert"> 
                {errors.ad}
            </p>
            )}
        </div>

        <div className="edit-row">
            <label className="label" htmlFor="email">Email</label> 
            <input
            id="email" 
            className={`edit-input ${errors.email ? "input-error" : ""}`}
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email} 
            aria-describedby={errors.email ? "email-error" : undefined} 
            />
            {errors.email && (
            <p id="email-error" className="error-msg" role="alert"> 
                {errors.email}
            </p>
            )}
        </div>

        <div className="edit-actions">
            <button type="submit" className="save-btn">Saxla</button>
        </div>
    </form>

      {showToast && (
        <Toast
          message="Dəyişikliklər saxlanıldı!"
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
}