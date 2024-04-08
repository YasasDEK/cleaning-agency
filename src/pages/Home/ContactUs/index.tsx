import {
  Alert,
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import { customStyles } from "./index.styles";
import { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

interface Props {
  id: string;
}

const formDefaultValue = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "required" })
    .max(50, { message: "large" }),
  email: z
    .string()
    .min(1, { message: "required" })
    .max(260, { message: "large" })
    .email({ message: "invalid" }),
  mobile: z
    .string()
    .min(1, { message: "required" })
    .length(9, { message: "invalid" }),
  message: z
    .string()
    .min(1, { message: "required" })
    .max(500, { message: "large" }),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactUs = ({ id }: Props) => {
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const { handleSubmit, getValues, control, formState, reset } =
    useForm<FormSchema>({
      resolver: zodResolver(formSchema),
      mode: "onChange",
      defaultValues: formDefaultValue,
    });

  const resetAlerts = () => {
    setSubmitSuccessful(false);
  };

  const onSubmit = () => {
    if (Boolean(getError())) {
      return;
    }

    emailjs
      .sendForm(
        "service_qmo1hky",
        "template_rp4lv3j",
        getValues().message,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmitSuccessful(true);

    reset();

    setTimeout(resetAlerts, 3000);
  };

  const getError = () => {
    if (
      formState.errors.name?.message === "required" ||
      formState.errors.email?.message === "required" ||
      formState.errors.message?.message === "required" ||
      formState.errors.mobile?.message === "required"
    ) {
      return (
        <Alert severity="error">
          Please fill all the fileds to add a comment
        </Alert>
      );
    }

    if (
      formState.errors.email?.message === "invalid" ||
      formState.errors.email?.message === "large"
    ) {
      return <Alert severity="error">Invalid Email</Alert>;
    }

    if (formState.errors.name?.message === "large") {
      return (
        <Alert severity="error">
          Name should contain less than 30 characters
        </Alert>
      );
    }

    if (
      formState.errors.mobile?.message === "invalid" ||
      /\D/.test(getValues().mobile)
    ) {
      return <Alert severity="error">Invalid mobile</Alert>;
    }

    if (formState.errors.message?.message === "large") {
      return (
        <Alert severity="error">
          comment should contain less than 500 characters
        </Alert>
      );
    }

    return "";
  };

  return (
    <Box id={id} mb={4}>
      <Box id={id} mt={6} px={4}>
        <Divider>
          <Typography variant="h3" sx={customStyles.text}>
            Contact us
          </Typography>
        </Divider>
      </Box>

      <Card sx={customStyles.card}>
        <Stack width={{ xs: "100%", md: "60%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Typography sx={customStyles.formLabel}>Name</Typography>

              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    size="small"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Typography sx={customStyles.formLabel}>Email</Typography>

              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    size="small"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Typography sx={customStyles.formLabel}>Mobile</Typography>

              <Controller
                name="mobile"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    fullWidth
                    size="small"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Typography sx={customStyles.formLabel}>Message</Typography>

              <Controller
                name="message"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    size="small"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Box>{getError()}</Box>

              {!getError() && submitSuccessful && (
                <Alert severity="success">
                  Thank you for your request, we will get back to you soon!
                </Alert>
              )}

              <Button
                variant="contained"
                type="submit"
                sx={customStyles.submitButton}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>

        <Divider sx={customStyles.divider} orientation="vertical" flexItem>
          OR
        </Divider>

        <Divider sx={customStyles.mobileDivider}>OR</Divider>

        <Stack
          spacing={4}
          width={{ xs: "100%", md: "40%" }}
          justifyContent="center"
          alignItems="center"
          sx={[
            customStyles.mailStack,
            {
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/call.png)`,
            },
          ]}
        >
          <Button sx={customStyles.button} variant="contained">
            <Link
              to="mailto:kavindaxyz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={customStyles.link}
            >
              <Stack
                direction="row"
                spacing={2}
                display="flex"
                alignItems="center"
                color="white"
              >
                <Typography>Send us an Email</Typography>

                <MailOutlineIcon />
              </Stack>
            </Link>
          </Button>

          <Button
            onClick={() => (window.location.href = `tel:${+91480319262}`)}
            sx={customStyles.button}
            fullWidth
            variant="contained"
          >
            Call Us
            <CallIcon />
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default ContactUs;
