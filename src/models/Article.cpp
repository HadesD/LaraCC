#include "models/Article.hpp"

#include <html.h>
#include <document.h>

namespace app::models
{

  Article::Article()
  {
    this->id = 0;
  }

  Article::Article(const std::string& slug)
  {
    std::pair<std::string, std::string> w("slug", slug);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      self::getTableName(),
      w
      );

    this->slug = slug;
  }

  Article::Article(const int id)
  {
    this->id = id;
  }

  std::vector<Article> Article::getAll()
  {
    std::vector<Article> articles;

    std::vector<int> ids = m_connector.select(
      m_primaryKeyName,
      self::getTableName()
      );

    for (const auto& id : ids)
    {
      articles.push_back(Article(id));
    }

    return articles;
  }

  Article::TypeText Article::getTypeText(const Type type)
  {
    Article::TypeText typeText;

    switch (static_cast<int>(type))
    {
      case 0:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        typeText.featuredClassName = "featured-image";
        break;
      case 1:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        typeText.featuredClassName = "featured-image";
        break;
      default:
        typeText.iconClassName = "fa fa-fw fa-video";
        typeText.featuredClassName = "featured-video";
        typeText.name = "video";
    }

    return typeText;
  }

  Article::TypeText Article::getTypeText()
  {
    return Article::getTypeText(
      static_cast<Article::Type>(this->type)
      );
  }

  std::string Article::getContentHtml()
  {
    if (m_contentHtml.empty())
    {
      std::string content = this->getContent();

      if (content.empty())
      {
        content = "Empty";
      }

      hoedown_html_flags html_flags = HOEDOWN_HTML_SKIP_HTML;
      hoedown_renderer *renderer = hoedown_html_renderer_new(
        html_flags, 0
        );

      auto extensions = static_cast<hoedown_extensions>(
        HOEDOWN_EXT_TABLES
        | HOEDOWN_EXT_UNDERLINE
        );
      hoedown_document *document = hoedown_document_new(
        renderer, extensions, 16
        );

      hoedown_buffer *html = hoedown_buffer_new(content.size());

      hoedown_document_render(
        document, html,
        reinterpret_cast<const uint8_t*>(content.c_str()),
        content.size()
        );

      m_contentHtml = std::string(/* reinterpret_cast<char*> */(char*)(html->data));

      hoedown_buffer_free(html);
      hoedown_document_free(document);
      hoedown_html_renderer_free(renderer);
    }

    return m_contentHtml;
  }

  bool Article::save()
  {
    if (m_queueSaveColumns.empty())
    {
      return false;
    }

    std::string statement;

    if (this->id == 0)
    {
      std::string cols;
      std::string vals;
      std::size_t i = 0;
      for (const auto& col : m_queueSaveColumns)
      {
        if ((i > 0) && (i < (m_queueSaveColumns.size() - 1)))
        {
          cols += ",";
          vals += ",";
        }
        cols += col;
        vals += "?";
        i++;
      }
      statement = "INSERT INTO "
      + self::getTableName()
      + " ("
      + cols
      + ") "
      + " VALUES("
      + vals
      + ");"
      ;
    }
    else
    {
      statement = "UPDATE "
      + self::getTableName()
      + " SET "
      ;
      std::size_t i = 0;
      for (const auto& col : m_queueSaveColumns)
      {
        if ((i > 0) && (i < (m_queueSaveColumns.size() - 1)))
        {
          statement += ",";
        }
        statement += col + "=? ";
        i++;
      }

      statement += " WHERE " + m_primaryKeyName + "=?;";
    }

    return false;
  }

}

