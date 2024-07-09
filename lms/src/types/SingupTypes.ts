export type SignupFormValues = {
  username: string;
  email: string;
  password: string;
  is_active: boolean;
  role: string;
};

export interface SignupApiResponse {
  username: string;
  email: string;
  is_active: boolean;
  role: string;
}
