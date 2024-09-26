import { z } from 'zod';

export const MeetingKindEnumSchema = z.enum([
  'LESSON',
  'WORKSHOP',
  'EXAM',
  'INTRO_CALL',
  'OUTRO_CALL',
  'SPEAKING_CLUB_LESSON',
  'OTHER',
]);

export const ClassSizesEnumSchema = z.enum(['INDIVIDUAL', 'GROUP_2_4', 'GROUP_5_8', 'GROUP_9_12']);

export const CourseStructureSchema = z.object({
  course_id: z.string(),
  module_id: z.number(),
  section_id: z.number(),
  lesson_id: z.number(),
  course: z.any(),
  module: z.any(),
  section: z.any(),
  lesson: z.any(),
});

export const ClassSchema = z.object({
  class_id: z.string(),
  class_code: z.string().optional(),
  course_id: z.string(),
  start_date: z.date(),
  end_date: z.date().optional(),
  tuition_lang_code: z.string(),
  time_of_day_id: z.string(),
  start_time_gmt3: z.string(),
  class_size_id: z.string(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  is_instance_of_course: z.any(),
  time_of_day: z.any(),
  tuition_lang: z.any(),
  mentor_classes: z.array(z.any()),
  students: z.array(z.any()),
  booking_requests: z.array(z.any()),
  class_calls: z.array(z.any()),
  classSizeClass_size_id: z.string(),
  ClassTask: z.array(z.any()),
});

export const ClassCallSchema = z.object({
  class_call_id: z.string(),
  class_id: z.string(),
  call_date: z.date(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  meeting_kind_id: z.string(),
  class: z.any(),
  meeting_kind: MeetingKindEnumSchema,
});

export const ClassSizeSchema = z.object({
  class_size_id: z.string(),
  class_size_name: ClassSizesEnumSchema,
  classes: z.array(z.any()),
  MentorPayModel: z.array(z.any()),
});

export const CourseSchema = z.object({
  course_code: z.string(),
  course_name: z.string().optional(),
  course_level_id: z.string(),
  created_date: z.date().optional(),
  subject_code: z.string(),
  course_level: z.any(),
  course_advice: z.array(z.any()),
  classes: z.array(ClassSchema),
  subject: z.any().optional(),
  CourseStructure: z.array(CourseStructureSchema),
  CourseTask: z.array(z.any()),
  Module: z.array(z.any()),
  LessonCard: z.array(z.any()),
});

export const CoursesSchema = z.array(CourseSchema);

export const CourseAdviceSchema = z.object({
  advice_id: z.string(),
  course_code: z.string(),
  advice_text: z.string().optional(),
  last_used_date: z.string().optional(),
  created_date: z.string(),
  course: z.any(),
});

export const CourseTaskSchema = z.object({
  course_task_id: z.string(),
  course_id: z.string(),
  module_id: z.number(),
  section_id: z.number(),
  lesson_id: z.number(),
  task_id: z.number(),
  question: z.string(),
  course: z.any(),
  module: z.any(),
  section: z.any(),
  lesson: z.any(),
  task: z.any(),
  ClassTask: z.array(z.any()),
});

export const CourseLevelSchema = z.object({
  course_level_id: z.string(),
  course_level_name: z.string(),
  course: z.array(z.any()),
  CourseLevelsPerSubject: z.array(z.any()),
});

export const SubjectSchema = z.object({
  subject_code: z.string(),
  subject_name: z.string(),
  Course: z.array(z.any()),
  CourseLevelsPerSubject: z.array(z.any()),
});

export const CourseLevelsPerSubjectSchema = z.object({
  course_level_id: z.string(),
  subject_code: z.string(),
  course_level: z.any(),
  subject: z.any(),
});

export const LessonSchema = z.object({
  lesson_id: z.number(),
  lesson_name: z.string(),
  lesson_description: z.string().optional(),
  lesson_order: z.number(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  section_id: z.number(),
  section: z.any(),
  tasks: z.array(z.any()),
  CourseStructure: z.array(z.any()),
  CourseTask: z.array(z.any()),
  Module: z.any().optional(),
  moduleModule_id: z.number().optional(),
  LessonCard: z.array(z.any()),
  UserCard: z.array(z.any()),
});

export const MentorSchema = z.object({
  mentor_id: z.string(),
  user_id: z.string(),
  mentor_description_en: z.string().optional(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  user: z.any(),
  mentor_classes: z.array(z.any()),
  MentorPayModel: z.array(z.any()),
});

export const MentorsClassesSchema = z.object({
  mentor_id: z.string(),
  class_id: z.string(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  mentor: z.any(),
  class: z.any(),
});

export const MentorPayModelSchema = z.object({
  mentor_id: z.string(),
  class_size_id: z.string(),
  start_date: z.date(),
  pay_rate_per_hour: z.number(),
  created_date: z.date().optional(),
  end_date: z.date().optional(),
  deleted: z.boolean().optional(),
  mentor: z.any(),
  class_size: z.any(),
});

export const ModuleSchema = z.object({
  module_id: z.number(),
  module_name: z.string(),
  module_description: z.string().optional(),
  module_order: z.number(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  course_id: z.string(),
  course: z.any(),
  sections: z.array(z.any()),
  lessons: z.array(z.any()),
  CourseStructure: z.array(z.any()),
  CourseTask: z.array(z.any()),
});

export const SectionSchema = z.object({
  section_id: z.number(),
  section_name: z.string(),
  section_description: z.string().optional(),
  section_order: z.number(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  module_id: z.number(),
  module: z.any(),
  CourseStructure: z.array(z.any()),
  CourseTask: z.array(z.any()),
  Lesson: z.array(z.any()),
});

export const TimeOfDaySchema = z.object({
  time_of_day_id: z.string(),
  time_of_day_name: z.string(),
  classes: z.array(z.any()),
});

export const TuitionLangSchema = z.object({
  tuition_lang_code: z.string(),
  tuition_lang_name: z.string(),
  classes: z.array(z.any()),
});

export const DeckSchema = z.object({
  deck_id: z.string(),
  user_id: z.string(),
  deck_description: z.string().optional(),
  user: z.any(),
  Card: z.array(z.any()),
});

export const LessonCardSchema = z.object({
  card_id: z.string(),
  deck_id: z.string(),
  question: z.string(),
  answer: z.string(),
  example: z.string().optional(),
  course_code: z.string(),
  lesson_id: z.number(),
  deck: z.any(),
  course: z.any(),
  lesson: z.any(),
});

export const UserCardSchema = z.object({
  user_card_id: z.string(),
  user_id: z.string(),
  question: z.string(),
  answer: z.string(),
  example: z.string().optional(),
  lesson_id: z.number().optional(),
  user: z.any(),
  lesson: z.any().optional(),
});

export const VocabularySchema = z.object({
  vocabulary_id: z.string(),
  user_id: z.string(),
});

export const VocabularyInboxSchema = z.object({
  user_id: z.string(),
  question: z.string(),
  answer: z.string(),
  user: z.any(),
});

export const UserSchema = z.object({
  user_email: z.string(),
  created_at: z.date(),
  updated_at: z.date().optional(),
  user_roles: z.array(z.any()),
  first_name: z.string(),
  last_name: z.string(),
  nickname: z.string().optional(),
  deleted: z.boolean().optional(),
  user_application_preferences: z.array(z.any()),
  mentor: z.array(z.any()),
  is_student_of: z.array(z.any()),
  DataRemovalRequest: z.array(z.any()),
  Deck: z.array(z.any()),
  UserCard: z.array(z.any()),
  VocabularyInbox: z.array(z.any()),
});

export const RoleSchema = z.object({
  role_id: z.string(),
  role_name: z.string().optional(),
  role_description: z.string().optional(),
  user_roles: z.array(z.any()),
});

export const UserRoleSchema = z.object({
  user_email: z.string(),
  role_id: z.string(),
  user: z.any(),
  role: z.any(),
});

export const UserApplicationPreferencesSchema = z.object({
  user_email: z.string(),
  application_id: z.string(),
  accepted_privacy_policy: z.boolean(),
  accepted_cookies_policy: z.boolean(),
  user: z.any(),
  application: z.any(),
});

export const ApplicationSchema = z.object({
  application_id: z.string(),
  application_name: z.string(),
  application_description: z.string().optional(),
  application_url: z.string().optional(),
  user_application_preferences: z.array(z.any()),
});

export const DataRemovalRequestSchema = z.object({
  data_removal_request_id: z.number(),
  user_email: z.string(),
  data_removal_request: z.string(),
  data_removal_status: z.enum(['PENDING', 'COMPLETED', 'FAILED']),
  data_removal_date: z.date(),
  user: z.any(),
});

export const MeetingKindSchema = z.object({
  meeting_kind_id: z.string(),
  meeting_kind_name: z.string(),
  class_calls: z.array(z.any()),
});

export const ClassTaskSchema = z.object({
  class_task_id: z.number(),
  course_task_id: z.string(),
  class_id: z.string(),
  course_task: z.any(),
  class: z.any(),
  student_tasks: z.array(z.any()),
  student_answer: z.array(z.any()),
});

export const StudentSchema = z.object({
  student_id: z.string(),
  user_id: z.string(),
  student_nickname: z.string().optional(),
  enrolled_date: z.date().optional(),
  left_date: z.date().optional(),
  created_date: z.date().optional(),
  updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  class_id: z.string(),
  user: z.any(),
  class: z.any(),
  student_task: z.array(z.any()),
  student_answers: z.array(z.any()),
});

export const StudentAnswerSchema = z.object({
  student_answer_id: z.number(),
  student_id: z.string(),
  class_task_id: z.number(),
  answer: z.string(),
  student: z.any(),
  class_task: z.any(),
});

export const StudentTaskSchema = z.object({
  student_task_id: z.number(),
  student_id: z.string(),
  class_task_id: z.number(),
  task_status: z.enum(['PENDING', 'BLOCKED', 'IN_PROGRESS', 'COMPLETED']),
  student: z.any(),
  class_task: z.any(),
});

export const TaskSchema = z.object({
  task_id: z.number(),
  task_description: z.string().optional(),
  task_text: z.string().optional(),
  task_type_id: z.number(),
  task_context_id: z.string(),
  task_form_id: z.number().optional(),
  task_created_date: z.date().optional(),
  task_updated_date: z.date().optional(),
  deleted: z.boolean().optional(),
  lesson_id: z.number(),
  gap_map: z.string().optional(),
  task_type: z.any(),
  task_context: z.any(),
  lesson: z.any(),
  task_forms: z.array(z.any()),
  task_options: z.array(z.any()),
  CourseTask: z.array(z.any()),
});

export const TaskFormSchema = z.object({
  task_form_id: z.number(),
  task_form_name: z.string(),
  task_form_description: z.string().optional(),
  task: z.array(z.any()),
});

export const TaskContextSchema = z.object({
  task_context_id: z.string(),
  task_context_name: z.string(),
  task_context_description: z.string().optional(),
  task: z.array(z.any()),
});

export const TaskOptionSchema = z.object({
  task_option_id: z.number(),
  task_id: z.number(),
  task_option_text: z.string(),
  task_option_order: z.number().optional(),
  is_correct: z.boolean(),
  task: z.any(),
});

export const TaskTypeSchema = z.object({
  task_type_id: z.number(),
  task_type_name: z.string(),
  task_type_description: z.string().optional(),
  task: z.array(z.any()),
});

export const BookingRequestSchema = z.object({
  booking_request_id: z.string(),
  class_id: z.string(),
  booking_date: z.date(),
  booking_request_status: z.enum(['PENDING', 'NEGOTIATING', 'ASSIGNED', 'REJECTED', 'LOST']),
  user_stated_name: z.string().optional(),
  user_stated_phone: z.string().optional(),
  user_stated_email: z.string().optional(),
  user_stated_telegram_nickname: z.string().optional(),
  class: z.any(),
});
