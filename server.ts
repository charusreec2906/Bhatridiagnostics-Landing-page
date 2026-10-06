import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

const PORT = 3001;

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

app.use(express.json());

app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const { fullName, email, phone, position, message } = req.body;

    if (!fullName || !email || !phone || !position) {
      return res.status(400).json({
        success: false,
        message: 'Required application fields are missing.',
      });
    }

const botToken = process.env.MATTERMOST_BOT_TOKEN;
const channelId = 'madguu1f4bgx3x5u7176wc93ja';

if (!botToken) {
  return res.status(500).json({
    success: false,
    message: 'Mattermost bot token is not configured.',
  });
}

let fileId: string | undefined;

if (req.file) {
  const fileBuffer = fs.readFileSync(req.file.path);

  const fileForm = new FormData();

  fileForm.append(
    'channel_id',
    channelId
  );

  fileForm.append(
    'files',
    new Blob([fileBuffer], {
      type: req.file.mimetype,
    }),
    req.file.originalname
  );

  const uploadResponse = await fetch(
    'https://chat.flexrads.com/api/v4/files',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${botToken}`,
      },
      body: fileForm,
    }
  );

  if (!uploadResponse.ok) {
    const uploadError = await uploadResponse.text();
    throw new Error(
      `Mattermost file upload failed: ${uploadResponse.status} ${uploadError}`
    );
  }

  const uploadResult = await uploadResponse.json();

  fileId = uploadResult.file_infos?.[0]?.id;

  if (!fileId) {
    throw new Error('Mattermost did not return a file ID.');
  }
}

const applicationMessage = [
  '**NEW RADIOLOGIST APPLICATION**',
  '',
  `**Name:** ${fullName}`,
  `**Email:** ${email}`,
  `**Phone:** ${phone}`,
  `**Position:** ${position}`,
  '',
  '**Brief Profile:**',
  message || 'Not provided',
].join('\n');

const postResponse = await fetch(
  'https://chat.flexrads.com/api/v4/posts',
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${botToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel_id: channelId,
      message: applicationMessage,
      ...(fileId ? { file_ids: [fileId] } : {}),
    }),
  }
);

if (!postResponse.ok) {
  const postError = await postResponse.text();
  throw new Error(
    `Mattermost post failed: ${postResponse.status} ${postError}`
  );
}
    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }

    return res.json({
      success: true,
      message: 'Application submitted successfully.',
    });
  } catch (error) {
    console.error('Application submission error:', error);

    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }

    return res.status(500).json({
      success: false,
      message: 'Unable to submit application.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Bhartidiagnostics backend running on port ${PORT}`);
});